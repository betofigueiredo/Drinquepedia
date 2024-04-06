const Errors = () => {
  return (
    <div className="container">
      <h1 className="mb-6 mt-24 font-serif text-4xl font-bold leading-none text-amber-300">
        Ops! Ocorreu um erro inesperado.
      </h1>
      <p className="text-gray-700">
        Por favor, recarregue a página para tentar novamente.
        <br />
        Se o problema persistir, entre em contato conosco para que possamos
        resolver isso o mais rápido possível.
      </p>
    </div>
  );
};

export default Errors;
