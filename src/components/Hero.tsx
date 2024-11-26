const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center py-20 md:py-0">
      {/* Background image  */}
      <div className="absolute inset-0 bg-[url('/src/assets/hero-bg-image.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Gradient overlay  */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/75"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Main content  */}
          <div className="text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Discover Your Next Favorite eBook
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl drop-shadow">
              Explore thousands of digital books, from bestsellers to rare
              finds. Your perfect read is just a click away.
            </p>

            {/* Features/Benefits  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-lg bg-white/15 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Instant Access
                </h3>
                <p className="text-gray-100">
                  Start reading immediately after purchase
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/15 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Wide Selection
                </h3>
                <p className="text-gray-100">
                  Books across all genres and categories
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/15 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Great Prices
                </h3>
                <p className="text-gray-100">
                  Competitive prices and regular deals
                </p>
              </div>
            </div>

            {/* CTA Buttons  */}
            <div className="flex flex-row gap-4 justify-start mt-8">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Browse Library
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>

            {/* Trust Indicators  */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm md:text-base text-gray-100 text-left drop-shadow">
                Join over 100,000 happy readers • 30-day money-back guarantee •
                Secure payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
