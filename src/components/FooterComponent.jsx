const FooterComponent = () => {
  return (
    <div className="px-6 py-10 pt-20 md:px-28 md:pt-40 bg-background">
      <div className="flex flex-col md:flex-row py-10 md:py-20 w-full justify-between items-start gap-12 md:gap-0">
        <div>
          <h1 className="text-highlight text-3xl font-bold">Ginpay</h1>
        </div>
        <div className="w-full md:w-auto">
          <ul className="w-full md:w-md justify-between flex flex-col md:flex-row font-medium list-none text-sm gap-10 md:gap-0">
            <li className="flex flex-col gap-5">
              <p className="text-2xl font-semibold text-highlight">Solutions</p>
              <ul className="flex flex-col gap-2 list-none text-md text-gray-500">
                <li>Small Business</li>
                <li>Freelancers</li>
                <li>Customers</li>
                <li>Taxes</li>
              </ul>
            </li>
            <li className="flex flex-col gap-5">
              <p className="text-2xl font-semibold text-highlight">Company</p>
              <ul className="flex flex-col gap-2 list-none text-md text-gray-500">
                <li>About Us</li>
                <li>Career</li>
                <li>Contact</li>
              </ul>
            </li>
            <li className="flex flex-col gap-5">
              <p className="text-2xl font-semibold text-highlight">Learn</p>
              <ul className="flex flex-col gap-2 list-none text-md text-gray-500">
                <li>Blog</li>
                <li>Ebooks</li>
                <li>Guides</li>
                <li>Templates</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="mb-4">Follow us on</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center py-4 font-medium text-primary">
        <p>©Finpay 2025. All rights reserved.</p>
        <p>Design by @Dipa UI/UX from dribbble </p>
      </div>
    </div>
  );
};

export default FooterComponent;
