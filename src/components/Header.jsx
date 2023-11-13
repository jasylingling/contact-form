function Header({ heading, subheading }) {
  return (
    <header className="text-center pt-10">
      <h1 className="text-3xl font-bold mb-3">{heading}</h1>
      <p className="text-lg mb-12">{subheading}</p>
    </header>
  );
}

export default Header;
