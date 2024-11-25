import { useState } from "react";
// Components
import { Button } from "@/components/ui/button";
// Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Data
import { featuredBooks } from "@/data/books";
// Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredBooks.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredBooks.length) % featuredBooks.length
    );
  };

  return (
    <div className="relative bg-accent/5 border-b overflow-hidden">
      {/* Enhanced Decorative Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700/25" />

        {/* Abstract Shapes */}
        <div className="absolute inset-0">
          {/* Large Gradient Circles */}
          <div className="absolute -left-20 -top-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/10 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-accent/10 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-primary/10 rounded-lg rotate-45" />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-accent/10 rounded-lg -rotate-12" />

          {/* Small Dots */}
          <div className="absolute top-[15%] left-[45%] w-2 h-2 bg-primary/20 rounded-full" />
          <div className="absolute top-[45%] left-[15%] w-3 h-3 bg-accent/20 rounded-full" />
          <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-primary/20 rounded-full" />
          <div className="absolute top-[35%] right-[20%] w-3 h-3 bg-accent/20 rounded-full" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto relative py-8 md:py-16">
        <div className="flex flex-col md:flex-row">
          {/* Book Info (Left Side) */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
                    {featuredBooks[currentSlide].title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl mb-2 text-foreground">
                    By {featuredBooks[currentSlide].author}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {featuredBooks[currentSlide].description}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-6">
                    ${featuredBooks[currentSlide].price}
                  </p>
                  <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn More
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Book Image (Right Side) */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center my-12 md:my-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative Background */}
            <div className="relative">
              {/* Gradient Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />

              {/* Book Container */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Book Shadow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full" />

                    {/* Book Image with Floating Animation */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <motion.img
                        src={featuredBooks[currentSlide].image}
                        alt={featuredBooks[currentSlide].title}
                        className="h-[300px] md:h-[400px] object-contain rounded-lg relative z-10"
                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: -5 }}
                        exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 right-0">
        <div className="container mx-auto relative">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute md:-left-16 left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border-primary/10 bg-background/50 backdrop-blur hover:bg-accent hover:border-primary/20"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute md:-right-16 right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border-primary/10 bg-background/50 backdrop-blur hover:bg-accent hover:border-primary/20"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="container mx-auto relative">
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {featuredBooks.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-muted"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
