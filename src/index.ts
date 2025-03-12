import { JSDOM } from "jsdom";

type Books = {
  title: string;
  author: string;
  img: string;
}[];

export const getCurrentlyReading = async (
  username: string,
  page = 1
): Promise<Books> => {
  const response = await fetch(
    `https://app.thestorygraph.com/currently-reading/${username}?page=${page}`
    // `https://app.thestorygraph.com/books-read/${username}?page=${page}`
  );
  const html = await response.text();
  const { document } = new JSDOM(html).window;

  const bookCount =
    Number(
      document
        .querySelector(".search-results-count")
        ?.textContent?.replace(" books", "")
    ) || 0;

  // filter out duplicate book nodes with md:hidden class
  const bookNodes = document.querySelectorAll(
    ".book-pane div:not([class*='md:hidden']) .book-pane-content"
  );

  const books: Books = [...bookNodes].map((bookNode) => {
    const title =
      bookNode.querySelector(".book-title-author-and-series a[href*='/books/']")
        ?.textContent || "";
    const author =
      bookNode.querySelector(
        ".book-title-author-and-series a[href*='/authors/']"
      )?.textContent || "";
    const img =
      bookNode.querySelector(".book-cover img")?.getAttribute("src") || "";

    return { title, author, img };
  });

  if (bookCount > page * 10) {
    return [...books, ...(await getCurrentlyReading(username, page + 1))];
  }

  return books;
};

void (async () => {
  console.log(await getCurrentlyReading("paigevogie"));
})();
