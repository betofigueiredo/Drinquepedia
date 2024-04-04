import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import SecondHighlights from "@/components/SecondHighlights";
import ThirdHighlights from "@/components/ThirdHighlights";

const Home = () => (
  <>
    <div className="container">
      <FeaturedHighlights />
      <SecondHighlights />
    </div>
    <div className="my-24 w-full bg-gray-100">
      <div className="container grid grid-cols-2 gap-10 py-24">
        <div>
          <h1 className="mb-3 font-serif text-3xl font-bold text-gray-900">
            Dicas Gerais
          </h1>
          <p className="pb-8 pr-0 text-gray-500 md:pr-24">
            Descubra como criar os mixes essenciais para seus drinks favoritos,
            aprenda técnicas de decoração simples, como fazer coquetéis em
            camadas e muito mais.
          </p>
          <Link to="/drinques/caipirinhas">
            <Button className="animate-slide-in-from-left">
              Veja mais dicas
            </Button>
          </Link>
        </div>
        <div>
          <h1 className="mb-3 font-serif text-3xl font-bold text-gray-900">
            Tudo sobre bar
          </h1>
          <p className="pb-8 pr-0 text-gray-500 md:pr-9">
            Explore a classificação dos coquetéis, descubra as principais
            medidas utilizadas, conheça os diferentes tipos de copos e desvende
            outros segredos essenciais da mixologia.
          </p>
          <Link to="/drinques/caipirinhas">
            <Button className="animate-slide-in-from-left">
              Veja mais detalhes
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <div className="container">
      <ThirdHighlights />
    </div>
  </>
);

export default Home;
