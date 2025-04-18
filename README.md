# storygraph-js

A JavaScript client to fetch user data from [The StoryGraph](https://www.thestorygraph.com).

## Usage

Each of the following functions takes in a username as a required first parameter and the page number as an optional second parameter. The user's profile must be set to public.

```
import { getBooksCurrentlyReading } from "storygraph-js";

const booksCurrentlyReading = await getBooksCurrentlyReading("paigevogie");
```

```
import { getBooksRead } from "storygraph-js";

const booksRead = await getBooksRead("paigevogie", 2);
```

```
import { getBooksToRead } from "storygraph-js";

const booksToRead = await getBooksToRead("paigevogie", 2);
```

## Sample Response

Each response includes up to ten books per page, and each book includes the title, author, img, url, and rating. The response also includes the totalBookCount, currentPage, and the nextPage if there is one.

```
  {
    books: [
      {
        title: 'The Women',
        author: 'Kristin Hannah',
        img: 'https://cdn.thestorygraph.com/vwhf41uagyr67rfsk6oz71blk0te',
        url: 'https://app.thestorygraph.com/books/4cb9c964-4ddb-42c7-8cec-e527a9ebe8df',
        rating: '4.0'
      },
      ...
    ],
    totalBookCount: 61,
    currentPage: 1,
    nextPage: 2
  }
```
