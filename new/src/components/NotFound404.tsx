const NotFound404 = () => {
  return (
    <div className="container mx-auto px-3">
      <h1 className="mb-0 mt-24 font-serif text-[128px] font-bold leading-none text-amber-300">
        404
      </h1>
      <h2 className="mb-4 font-serif text-4xl font-bold text-gray-700">
        Página não encontrada!
      </h2>
      <p className="text-gray-700">
        A página solicitada não pôde ser encontrada.
        <br />
        Utilize o menu acima para encontrar o que você procura. Obrigado!
      </p>
    </div>
  );
};

export default NotFound404;
