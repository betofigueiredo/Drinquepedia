import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ThirdHighlights = () => (
  <div className="container grid grid-cols-1 gap-10 pb-4 pt-24 md:grid-cols-2">
    <div className="pb-20">
      <h1 className="mb-3 font-serif text-3xl font-bold text-gray-900">
        Dicas Gerais
      </h1>
      <p className="pb-8 pr-0 text-gray-500 md:pr-24">
        Descubra como criar os mixes essenciais para seus drinks favoritos,
        aprenda técnicas de decoração simples, como fazer coquetéis em camadas e
        muito mais.
      </p>
      <Link to="/dicas">
        <Button>Veja mais dicas</Button>
      </Link>
    </div>
    <div className="pb-20">
      <h1 className="mb-3 font-serif text-3xl font-bold text-gray-900">
        Tudo sobre bar
      </h1>
      <p className="pb-8 pr-0 text-gray-500 md:pr-9">
        Explore a classificação dos coquetéis, descubra as principais medidas
        utilizadas, conheça os diferentes tipos de copos e desvende outros
        segredos essenciais da mixologia.
      </p>
      <Link to="/tudosobrebar">
        <Button>Veja mais detalhes</Button>
      </Link>
    </div>
  </div>
);

export default ThirdHighlights;
