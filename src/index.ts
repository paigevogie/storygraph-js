import { JSDOM } from "jsdom";

type Books = {
  title: string;
  author: string;
  img: string;
}[];

type BooksResponse = Promise<{
  books: Books;
  totalBookCount: number;
  currentPage: number;
  nextPage: number | null;
}>;

const getBooksResponse = async (url: string, page: number): BooksResponse => {
  const response = await fetch(url);
  const html = await response.text();
  const { document } = new JSDOM(html).window;

  const totalBookCount =
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

  return {
    books,
    totalBookCount,
    currentPage: page,
    nextPage: totalBookCount > page * 10 ? page + 1 : null,
  };
};

const baseUrl = "https://app.thestorygraph.com";

const getBooksCurrentlyReading = async (
  username: string,
  page = 1
): BooksResponse =>
  getBooksResponse(
    `${baseUrl}/currently-reading/${username}?page=${page}`,
    page
  );

const getBooksRead = async (username: string, page = 1): BooksResponse =>
  getBooksResponse(`${baseUrl}/books-read/${username}?page=${page}`, page);

const getBooksToRead = async (username: string, page = 1): BooksResponse =>
  getBooksResponse(`${baseUrl}/to-read/${username}?page=${page}`, page);

export { getBooksCurrentlyReading, getBooksRead, getBooksToRead };
