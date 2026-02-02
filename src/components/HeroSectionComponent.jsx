const HeroSectionComponent = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 py-12 pt-10 md:px-32 md:pb-52 md:pt-10 bg-background gap-12 md:gap-0">
      <div className="text-secondary font-medium w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-4xl md:text-7xl md:leading-24 w-full md:w-2xl">
          <span className="font-bold">Get paid early</span>
          <br /> save automatically all your pay.
        </p>
        <p className="text-gray-500 font-regular text-lg my-4 w-full md:w-4/6">
          Supports small business with simple invoicing, powerful integrations,
          and cash flow management tools.
        </p>
        <div className="flex items-center mt-10 w-full md:w-auto relative">
          <input
            type="email"
            placeholder="Your business email"
            className="bg-white border border-gray-300 rounded-xl px-5 w-full md:w-[400px] h-14 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <button className="absolute right-0 md:relative md:right-auto md:-ml-20 px-6 py-4 bg-primary text-white text-md rounded-xl font-medium cursor-pointer hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start items-center mt-20 gap-8">
          <img
            src="/klarna.png"
            alt="klarna-logo"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src="/coinbase.png"
            alt="coinbase-logo"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src="/instacart.png"
            alt="instacart-logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/herosection-img.png"
          alt="illustration"
          className="w-full max-w-[500px] md:w-[600px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSectionComponent;
