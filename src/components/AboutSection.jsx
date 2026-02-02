const AboutSection = () => {
  return (
    <div className="w-full min-h-screen flex justify-between items-start px-6 md:px-32 mt-10 md:-mt-32 pb-20">
      <div className="bg-white w-full rounded-2xl p-8 md:p-28 shadow-lg">
        <p className="text-primary text-md font-regular">FUTURE PAYMENT</p>
        <div className="flex flex-col md:flex-row justify-between items-start mt-4 gap-6 md:gap-0">
          <p className="text-3xl md:text-5xl font-medium text-secondary w-full md:w-lg">
            Experience that grows with your scale.
          </p>
          <p className="text-lg font-regular text-gray-500 w-full md:w-2/6">
            Design a financial operating system that works for your business and
            streamlined cash flow management.
          </p>
        </div>
        <div className="w-full mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          <div className="flex-1">
            <img
              src="/transfer-icon.png"
              alt="transfer-icon"
              className="h-10 object-contain"
            />
            <p className="text-2xl my-4 font-semibold text-secondary">
              Free transfers
            </p>
            <p className="text-md font-regular text-gray-500 w-full md:w-2/3">
              Create a financial experience and automate repeate purchases by
              scheduling recurring payments.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/multiple-account-icon.png"
              alt="transfer-icon"
              className="h-10 object-contain"
            />
            <p className="text-2xl my-4 font-semibold text-secondary">
              Multiple accounts
            </p>
            <p className="text-md font-regular text-gray-500 w-full md:w-2/3">
              Run your operations with cash from your account and generate yield
              on funds stored in our account.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/security-icon.png"
              alt="transfer-icon"
              className="h-10 object-contain"
            />
            <p className="text-2xl my-4 font-semibold text-secondary">
              Unmatched security
            </p>
            <p className="text-md font-regular text-gray-500 w-full md:w-xs">
              Securely manage your finances with organisational-wide MFA,
              card-locking, and account level controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
