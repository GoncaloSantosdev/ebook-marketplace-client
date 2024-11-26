import { features } from "../data/features";

const Features = () => {
  return (
    <section className="relative w-full py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/src/assets/features-bg-image.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 drop-shadow">
            We provide the best experience for our customers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white/15 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all duration-200"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 drop-shadow">
                {feature.title}
              </h3>
              <p className="text-gray-100 text-sm drop-shadow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
