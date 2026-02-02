// Basic UI component placeholders can go here
export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-6 py-2 bg-black text-white rounded-full font-medium hover:opacity-90 transition-opacity ${className}`}
    {...props}
  >
    {children}
  </button>
);
