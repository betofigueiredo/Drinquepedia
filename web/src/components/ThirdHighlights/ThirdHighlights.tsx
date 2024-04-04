import { Highlight } from "@/types/highlight";
import HighlightCard from "@/components/HighlightCard";

const ThirdHighlights = () => {
  const highlights: Highlight[] = [
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
      id: "1",
      oldId: 1,
      type: "GENERAL",
      title: "HALLOWEEN",
      subtitle:
        "O Halloween chegou? Então surpreenda seus amigos com este terríveis e assustadores drinques que separamos para esse feriado.",
      description: "",
    },
    {
      id: "112",
      oldId: 112,
      type: "GENERAL",
      title: "MOJITO",
      subtitle:
        "O Mojito é um coquetel refrescante conhecido mundialmente. Este clássico é um dos poucos feitos com hortelã fresca, o que o torna único.",
      description: "",
      customUrl: "/drinques/24",
    },
    {
      id: "113",
      oldId: 113,
      type: "GENERAL",
      title: "MANGO DAIQUIRI",
      subtitle:
        "O Mango Daiquiri é delicioso e muito refrescante, perfeito para os dias quentes.",
      description: "",
      customUrl: "/drinques/432",
    },
  ];

  return (
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
      {highlights?.map((highlight) => (
        <HighlightCard key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
};

export default ThirdHighlights;
