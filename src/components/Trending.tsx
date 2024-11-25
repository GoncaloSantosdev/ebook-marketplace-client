import { trendingBooks } from "@/data/books";

const Trending = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 dark:text-white text-gray-900">
          Trending Books
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Discover what others are reading right now!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trendingBooks.map((book) => (
            <div key={book.id} className="rounded-lg">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2 dark:text-white text-gray-900">
                {book.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                by {book.author}
              </p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{book.rating}</span>
                <span className="text-gray-400 text-sm ml-2">
                  ({book.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 line-through text-sm">
                  ${book.originalPrice}
                </span>
                <span className="text-lg font-bold ml-2">
                  ${book.discountedPrice}
                </span>
                <span className="ml-2 bg-red-100 text-red-600 text-sm px-2 py-1 rounded">
                  {book.discount}% OFF
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
