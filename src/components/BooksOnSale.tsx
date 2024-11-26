// Data
import { books } from "../data/books";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Components
import Button from "./ui/Button";
// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const BooksOnSale = () => {
  // Filter books that have a discount greater than 0
  const discountedBooks = books.filter(
    (book) => book.discount && book.discount > 0
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Updated Header with larger text */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Books on Sale
            </h2>
            <p className="text-gray-600 mt-2">
              Discover our collection of discounted eBooks. Limited time offers
              on selected titles.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="swiper-button-prev-custom p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="swiper-button-next-custom p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Update Swiper to use discountedBooks */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView="auto"
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
        >
          {discountedBooks.map((book) => (
            <SwiperSlide key={book.id} className="!w-[280px] mt-8">
              <div className="h-[520px] flex flex-col">
                {/* Book Image Container */}
                <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
                  {book.discount && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-1 rounded-full text-sm font-semibold z-10">
                      -{book.discount}%
                    </div>
                  )}
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>

                {/* Book Details */}
                <div className="flex flex-col justify-between flex-grow pt-4">
                  {/* Content Section */}
                  <div className="space-y-2">
                    {/* Title */}
                    <h3 className="font-semibold text-gray-800 text-lg h-[56px] line-clamp-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>

                    {/* Reviews and Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-800">
                          {book.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        ( {book.reviews} reviews )
                      </span>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center gap-2">
                      {book.discount && (
                        <span className="text-lg text-gray-500 line-through">
                          ${book.price.toFixed(2)}
                        </span>
                      )}
                      <span className="text-xl font-bold text-primary">
                        $
                        {(
                          book.price *
                          (1 - (book.discount || 0) / 100)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Button Section */}
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    className="mt-3"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BooksOnSale;
