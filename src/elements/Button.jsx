function Button({ children }) {
  return (
    <button className="bg-pink-500 hover:bg-pink-600 text-pink-50 font-bold py-2 px-6 rounded self-start mt-4 tracking-wide">
      {children}
    </button>
  );
}

export default Button;
