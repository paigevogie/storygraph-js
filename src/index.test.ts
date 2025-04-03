import {
  getBooksCurrentlyReading,
  getBooksRead,
  getBooksToRead,
} from "./index";

describe("storygraph-js", () => {
  test("getBooksCurrentlyReading", async () => {
    const booksResponse = await getBooksCurrentlyReading("paigevogie");

    expect(booksResponse.books.length).toBeGreaterThan(0);
    expect(booksResponse.books[0].title).toBeTruthy();
    expect(booksResponse.books[0].author).toBeTruthy();
    expect(booksResponse.books[0].img).toBeTruthy();
    // TODO: handle no totalBookCount for currently reading (not in html)
    expect(booksResponse.totalBookCount).toBe(0);
    expect(booksResponse.currentPage).toBe(1);
    expect(booksResponse.nextPage).toBe(null);
  });

  test("getBooksRead", async () => {
    const booksResponse = await getBooksRead("paigevogie");

    expect(booksResponse.books.length).toBeGreaterThan(0);
    expect(booksResponse.books[0].title).toBeTruthy();
    expect(booksResponse.books[0].author).toBeTruthy();
    expect(booksResponse.books[0].img).toBeTruthy();
    expect(booksResponse.totalBookCount).toBeGreaterThan(0);
    expect(booksResponse.currentPage).toBe(1);
    expect(booksResponse.nextPage).toBe(2);
  });

  test("getBooksRead - page 2", async () => {
    const booksResponse = await getBooksRead("paigevogie", 2);

    expect(booksResponse.books.length).toBeGreaterThan(0);
    expect(booksResponse.books[0].title).toBeTruthy();
    expect(booksResponse.books[0].author).toBeTruthy();
    expect(booksResponse.books[0].img).toBeTruthy();
    expect(booksResponse.totalBookCount).toBeGreaterThan(0);
    expect(booksResponse.currentPage).toBe(2);
    expect(booksResponse.nextPage).toBe(3);
  });

  test("getBooksToRead", async () => {
    const booksResponse = await getBooksToRead("paigevogie");

    expect(booksResponse.books.length).toBeGreaterThan(0);
    expect(booksResponse.books[0].title).toBeTruthy();
    expect(booksResponse.books[0].author).toBeTruthy();
    expect(booksResponse.books[0].img).toBeTruthy();
    expect(booksResponse.totalBookCount).toBeGreaterThan(0);
    expect(booksResponse.currentPage).toBe(1);
    expect(booksResponse.nextPage).toBe(2);
  });

  test("getBooksToRead - page 2", async () => {
    const booksResponse = await getBooksToRead("paigevogie", 2);

    expect(booksResponse.books.length).toBeGreaterThan(0);
    expect(booksResponse.books[0].title).toBeTruthy();
    expect(booksResponse.books[0].author).toBeTruthy();
    expect(booksResponse.books[0].img).toBeTruthy();
    expect(booksResponse.totalBookCount).toBeGreaterThan(0);
    expect(booksResponse.currentPage).toBe(2);
    expect(booksResponse.nextPage).toBe(3);
  });
});
