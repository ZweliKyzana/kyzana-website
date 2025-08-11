export default function Button({ children, variant = "primary" }) {
  const baseStyles = "px-5 py-2.5 rounded-lg text-sm font-semibold";
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
