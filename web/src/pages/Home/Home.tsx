import HighlightCard from "@/components/HighlightCard";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import { Highlight } from "@/types/highlight";

const Home = () => {
  const secondSectionHighlights: Highlight[] = [
    {
      id: "6",
      oldId: 6,
      type: "GENERAL",
      title: "TOP 10 TROPICAIS",
      subtitle:
        "Confira nossa lista dos 10 melhores drinques tropicais para esse verão. Não deixe de experimentar. Confira já e divirta-se!",
      description: "",
    },
    {
      id: "108",
      oldId: 108,
      type: "GENERAL",
      title: "DRINQUES FROZEN",
      subtitle:
        "O calor chegou e nada melhor do que um bom drinque frozen para se refrescar durante esse verão. Confira aqui nossas receitas",
      description: "",
    },
    {
      id: "101",
      oldId: 101,
      type: "GENERAL",
      title: "PIÑA COLADA",
      subtitle:
        "Feita com Rum, suco de abacaxi, leite condensado e leite de côco, a Pinã Colada é um dos coquetéis mais gostosos e refrescantes que existe.",
      description: "",
    },
    {
      id: "109",
      oldId: 109,
      type: "GENERAL",
      title: "CLÁSSICOS",
      subtitle:
        "Conheça os drinques clássicos que nunca saem de moda. Daiquiri, Mojito, Margarita, Negroni e muito mais. Confira já!",
      description: "",
    },
  ];

  return (
    <div className="container">
      <FeaturedHighlights />
      <div className="grid grid-cols-4 gap-7 mt-14">
        {secondSectionHighlights?.map((highlight) => (
          <HighlightCard key={highlight.id} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};

export default Home;
