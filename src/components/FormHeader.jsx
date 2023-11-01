function FormHeader({ children, subheading }) {
  return (
    <header className="text-center pt-6">
      <h1 className="text-3xl font-bold underline mb-6">
        {children}
      </h1>
      <p className="text-xl mb-8">{subheading}</p>
    </header>
  );
}

export default FormHeader;
