import HighlightCard from "@/components/HighlightCard";

const DrinksListHighlights = ({ category }: { category?: string }) => {
  const allOptions = [
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
      id: "109",
      oldId: 109,
      type: "GENERAL",
      title: "CLÁSSICOS",
      subtitle:
        "Conheça os drinques clássicos que nunca saem de moda. Daiquiri, Mojito, Margarita, Negroni e muito mais. Confira já!",
      description: "",
      customUrl: "/drinques/classicos",
    },
    {
      id: "11",
      oldId: 11,
      type: "GENERAL",
      title: "FÁCEIS E RÁPIDOS",
      subtitle:
        "Separamos 10 drinques deliciosos e muito fáceis de preparar para você fazer em casa, sem nenhum trabalho. Confira!",
      description: "",
    },
    {
      id: "9",
      oldId: 9,
      type: "GENERAL",
      title: "DRINQUES EM CAMADAS",
      subtitle:
        "Aqui a imagem faz toda a diferença! Aprenda já como separar vários ingredientes em camadas e veja também ótimas receitas.",
      description: "",
    },
    {
      id: "7",
      oldId: 7,
      type: "GENERAL",
      title: "BEST SHOTS",
      subtitle:
        "Selecionamos aqui alguns dos melhores Shots que temos em nosso site. Não deixe de experimentar. Com eles, sua festa nunca mais será a mesma!",
      description: "",
    },
    {
      id: "111",
      oldId: 111,
      type: "GENERAL",
      title: "SMOOTHIES",
      subtitle:
        "Smoothies são bebidas saudáveis feitas com frutas, iogurtes e outros ingredientes naturais. Perfeitos para o verão que está chegando.",
      description: "",
      customUrl: "/drinques/smoothies",
    },
    {
      id: "110",
      oldId: 110,
      type: "GENERAL",
      title: "CAIPIRINHAS",
      subtitle:
        "Se você acha que caipirinha é só limão, cachaça e açúcar, está enganado. Veja aqui como usar diversos tipos de frutas e até picolés",
      description: "",
      customUrl: "/drinques/caipirinhas",
    },
  ];
  const options = allOptions.filter((option) => {
    if (category === "classicos") {
      return option.id !== "109";
    }
    if (category === "caipirinhas") {
      return option.id !== "110";
    }
    if (category === "smoothies") {
      return option.id !== "111";
    }
    return true;
  });
  const firstItem = options[Math.floor(Math.random() * options.length)];
  const secondItem = options.filter((option) => option.id !== firstItem.id)[
    Math.floor(Math.random() * (options.length - 1))
  ];

  return (
    <div className="hidden md:inline-block mt-20">
      <HighlightCard highlight={firstItem} />
      <div className="mb-16" />
      <HighlightCard highlight={secondItem} />
    </div>
  );
};

export default DrinksListHighlights;
