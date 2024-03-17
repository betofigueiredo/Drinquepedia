const NotFound404 = () => {
  return (
    <div className="container">
      <h1 className="font-serif font-bold text-[128px] text-amber-300 mt-24 mb-0 leading-none">
        404
      </h1>
      <h2 className="font-serif font-bold text-4xl text-gray-700 mb-4">
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
