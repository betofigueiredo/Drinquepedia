import { AlcoholicContent } from "@/types/drink";

const DrinkAlcoholicContent = ({
  alcoholicContent,
}: {
  alcoholicContent?: AlcoholicContent;
}) => {
  const options = {
    LOW: "Baixo",
    MEDIUM: "Médio",
    HIGH: "Alto",
  };
  return alcoholicContent ? <>{options[alcoholicContent]}</> : null;
};

export default DrinkAlcoholicContent;
