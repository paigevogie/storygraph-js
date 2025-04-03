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

Each response includes up to ten books per page, and each book includes the title, author, and img. The response also includes the totalBookCount, currentPage, and the nextPage if there is one.

```
  {
    books: [
      {
        title: 'My Brilliant Friend',
        author: 'Elena Ferrante',
        img: 'https://cdn.thestorygraph.com/ag7rniahbxb8movzf01y6fu78t65'
      },
      {
        title: 'Burnout: The Secret to Unlocking the Stress Cycle',
        author: 'Amelia Nagoski',
        img: 'https://cdn.thestorygraph.com/qebm9ho0n5g0zi8ijehk0jtmjmjl'
      },
      {
        title: 'People We Meet on Vacation',
        author: 'Emily Henry',
        img: 'https://cdn.thestorygraph.com/ydwcyg1gvb3evmdwe8mwxipgjm0e'
      },
      {
        title: 'Solito',
        author: 'Javier Zamora',
        img: 'https://cdn.thestorygraph.com/rgv9y3l60a8buk0tf1g81ehft07x'
      },
      {
        title: 'The Women',
        author: 'Kristin Hannah',
        img: 'https://cdn.thestorygraph.com/vwhf41uagyr67rfsk6oz71blk0te'
      },
      {
        title: 'Funny Story',
        author: 'Emily Henry',
        img: 'https://cdn.thestorygraph.com/1g29jx6p4mi0o8xpza6pgs0jq0js'
      },
      {
        title: 'Yellowface',
        author: 'R.F. Kuang',
        img: 'https://cdn.thestorygraph.com/sfs35j4v2y88qrk4hv2hsldi5zxa'
      },
      {
        title: 'The Guest List',
        author: 'Lucy Foley',
        img: 'https://cdn.thestorygraph.com/k0mnha6qyvufh4fuk0zko9f6a8qj'
      },
      {
        title: 'Beach Read',
        author: 'Emily Henry',
        img: 'https://cdn.thestorygraph.com/tqjp3qfmxviv2ao11m2rygvsqlvo'
      },
      {
        title: 'The Memory Police',
        author: 'Yōko Ogawa',
        img: 'https://cdn.thestorygraph.com/qrs3rwv8yzfmmq2xfwgaupdoqg0l'
      }
    ],
    totalBookCount: 61,
    currentPage: 1,
    nextPage: 2
  }
```
