export interface Book {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  author: string;
  reviews: number;
  discount?: number;
}

export const books: Book[] = [
  // Programming Books
  {
    id: "1",
    title: "Clean Code: A Handbook of Agile Software",
    author: "Robert C. Martin",
    price: 39.99,
    rating: 4.8,
    reviews: 2419,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Programming",
    discount: 15,
  },
  {
    id: "2",
    title: "Design Patterns: Elements of Reusable Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides",
    price: 45.99,
    rating: 4.7,
    reviews: 1829,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Programming",
    discount: 15,
  },
  {
    id: "3",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 29.99,
    rating: 4.6,
    reviews: 3152,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Programming",
    discount: 15,
  },
  {
    id: "4",
    title: "Python Crash Course",
    author: "Eric Matthes",
    price: 34.99,
    rating: 4.9,
    reviews: 4521,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Programming",
    discount: 15,
  },
  {
    id: "5",
    title: "Learning React",
    author: "Ethan Brown",
    price: 42.99,
    rating: 4.7,
    reviews: 1253,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Programming",
    discount: 15,
  },

  // Business Books
  {
    id: "6",
    title: "Good to Great",
    author: "Jim Collins",
    price: 24.99,
    rating: 4.5,
    reviews: 5231,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/b01e854ce12519d3d7bac72bd7bf8e0f-450x600.jpg",
    category: "Business",
    discount: 10,
  },
  {
    id: "7",
    title: "Zero to One",
    author: "Peter Thiel",
    price: 27.99,
    rating: 4.8,
    reviews: 3842,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Business",
    discount: 10,
  },
  {
    id: "8",
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 29.99,
    rating: 4.6,
    reviews: 4127,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/b01e854ce12519d3d7bac72bd7bf8e0f-450x600.jpg",
    category: "Business",
    discount: 10,
  },
  {
    id: "9",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 19.99,
    rating: 4.7,
    reviews: 8924,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Business",
    discount: 10,
  },
  {
    id: "10",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 22.99,
    rating: 4.9,
    reviews: 7231,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg",
    category: "Business",
    discount: 10,
  },

  // Science Fiction
  {
    id: "11",
    title: "Dune",
    author: "Frank Herbert",
    price: 32.99,
    rating: 4.9,
    reviews: 12453,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/a7cbc9ec4f61f7713101612a45211ebb-450x600.jpg",
    category: "Science Fiction",
    discount: 20,
  },
  {
    id: "12",
    title: "Foundation",
    author: "Isaac Asimov",
    price: 28.99,
    rating: 4.7,
    reviews: 6234,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/b01e854ce12519d3d7bac72bd7bf8e0f-450x600.jpg",
    category: "Science Fiction",
    discount: 10,
  },
  {
    id: "13",
    title: "Neuromancer",
    author: "William Gibson",
    price: 26.99,
    rating: 4.6,
    reviews: 3125,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/b01e854ce12519d3d7bac72bd7bf8e0f-450x600.jpg",
    category: "Science Fiction",
    discount: 10,
  },
  {
    id: "14",
    title: "Snow Crash",
    author: "Neal Stephenson",
    price: 29.99,
    rating: 4.8,
    reviews: 4213,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/b01e854ce12519d3d7bac72bd7bf8e0f-450x600.jpg",
    category: "Science Fiction",
    discount: 10,
  },
  {
    id: "15",
    title: "The Martian",
    author: "Andy Weir",
    price: 31.99,
    rating: 4.9,
    reviews: 5321,
    image:
      "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/cfe08fd2dbb10fcea101b0547247280e-450x600.jpg",
    category: "Science Fiction",
    discount: 10,
  },
];

export const categories = [...new Set(books.map((book) => book.category))];
