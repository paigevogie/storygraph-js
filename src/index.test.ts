import {
  getBooksCurrentlyReading,
  getBooksRead,
  getBooksToRead,
} from "./index";

describe("storygraph-js", () => {
  test("getBooksCurrentlyReading", async () => {
    const { books, totalBookCount, currentPage, nextPage } =
      await getBooksCurrentlyReading("paigevogie");
    const { title, author, img, url, rating } = books[0];

    expect(books.length).toBeGreaterThan(0);
    expect(title).toBeTruthy();
    expect(author).toBeTruthy();
    expect(img).toBeTruthy();
    expect(url).toBeTruthy();
    expect(rating).toBeFalsy();
    // TODO: handle no totalBookCount for currently reading (not in html)
    expect(totalBookCount).toBe(0);
    expect(currentPage).toBe(1);
    expect(nextPage).toBe(null);
  });

  test("getBooksRead", async () => {
    const { books, totalBookCount, currentPage, nextPage } = await getBooksRead(
      "paigevogie"
    );
    const { title, author, img, url, rating } = books[0];

    expect(books.length).toBeGreaterThan(0);
    expect(title).toBeTruthy();
    expect(author).toBeTruthy();
    expect(img).toBeTruthy();
    expect(url).toBeTruthy();
    expect(rating).toBeTruthy();
    expect(totalBookCount).toBeGreaterThan(0);
    expect(currentPage).toBe(1);
    expect(nextPage).toBe(2);
  });

  test("getBooksRead - page 2", async () => {
    const { books, totalBookCount, currentPage, nextPage } = await getBooksRead(
      "paigevogie",
      2
    );
    const { title, author, img, url, rating } = books[0];

    expect(books.length).toBeGreaterThan(0);
    expect(title).toBeTruthy();
    expect(author).toBeTruthy();
    expect(img).toBeTruthy();
    expect(url).toBeTruthy();
    expect(rating).toBeTruthy();
    expect(totalBookCount).toBeGreaterThan(0);
    expect(currentPage).toBe(2);
    expect(nextPage).toBe(3);
  });

  test("getBooksToRead", async () => {
    const { books, totalBookCount, currentPage, nextPage } =
      await getBooksToRead("paigevogie");
    const { title, author, img, url, rating } = books[0];

    expect(books.length).toBeGreaterThan(0);
    expect(title).toBeTruthy();
    expect(author).toBeTruthy();
    expect(img).toBeTruthy();
    expect(url).toBeTruthy();
    expect(rating).toBeFalsy();
    expect(totalBookCount).toBeGreaterThan(0);
    expect(currentPage).toBe(1);
    expect(nextPage).toBe(2);
  });

  test("getBooksToRead - page 2", async () => {
    const { books, totalBookCount, currentPage, nextPage } =
      await getBooksToRead("paigevogie", 2);
    const { title, author, img, url, rating } = books[0];

    expect(books.length).toBeGreaterThan(0);
    expect(title).toBeTruthy();
    expect(author).toBeTruthy();
    expect(img).toBeTruthy();
    expect(url).toBeTruthy();
    expect(rating).toBeFalsy();
    expect(totalBookCount).toBeGreaterThan(0);
    expect(currentPage).toBe(2);
    expect(nextPage).toBe(3);
  });
});
