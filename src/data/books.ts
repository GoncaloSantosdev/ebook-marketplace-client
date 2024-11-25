export interface Book {
  id: number;
  title: string;
  author: string;
  description?: string;
  originalPrice?: number;
  discountedPrice?: number;
  price?: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  image: string;
}

export const featuredBooks: Book[] = [
  {
    id: 1,
    title: "The Art of Programming",
    author: "John Smith",
    description:
      "A comprehensive guide to modern programming practices and principles.",
    price: 29.99,
    image:
      "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac9-to-kill-a-mockingbird.png",
  },
  {
    id: 2,
    title: "Digital Marketing Essentials",
    author: "Sarah Johnson",
    description:
      "Master the fundamentals of digital marketing in the modern age.",
    price: 24.99,
    image:
      "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cace-master-mern-stack-by-fsniraj.png",
  },
];

export const trendingBooks: Book[] = [
  {
    id: 1,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac9-to-kill-a-mockingbird.png",
    originalPrice: 39.99,
    discountedPrice: 29.99,
    discount: 25,
    rating: 4.8,
    reviewCount: 2547,
  },
  {
    id: 2,
    title: "Deep Learning Fundamentals",
    author: "Alice Chen",
    image:
      "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cace-master-mern-stack-by-fsniraj.png",
    originalPrice: 49.99,
    discountedPrice: 34.99,
    discount: 30,
    rating: 4.9,
    reviewCount: 1832,
  },
  {
    id: 3,
    title: "The Art of Storytelling",
    author: "David Miller",
    image:
      "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac9-to-kill-a-mockingbird.png",
    originalPrice: 29.99,
    discountedPrice: 19.99,
    discount: 33,
    rating: 4.7,
    reviewCount: 1245,
  },
];
