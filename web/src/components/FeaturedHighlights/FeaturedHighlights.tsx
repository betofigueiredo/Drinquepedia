import { useState } from "react";
import { useInterval } from "usehooks-ts";
import { Button } from "@/components/ui/button";

const FeaturedHighlights = () => {
  const [selectedHighlightIdx, setSelectedHighlightIdx] = useState<number>(0);

  useInterval(() => {
    const nextIdx = selectedHighlightIdx === 2 ? 0 : selectedHighlightIdx + 1;
    setSelectedHighlightIdx(nextIdx);
  }, 7000);

  const highlights = [
    {
      id: 1,
      order: 1,
      image: "/images/highlights/102.jpg",
      title: "Caipirinhas especiais para este verão",
      description:
        "Com certeza a melhor opção para os dias quentes! Confira receitas com blueberrys, amoras, kiwis, morangos e muito mais",
      link: "/drinques",
    },
    {
      id: 2,
      order: 2,
      image: "/images/highlights/103.jpg",
      title: "Smoothies saudáveis para o verão",
      description:
        "Smoothies são bebidas saudáveis feitas com frutas, iogurtes e outros ingredientes naturais. Perfeitos para o verão que está chegando.",
      link: "/drinques",
    },
    {
      id: 3,
      order: 3,
      image: "/images/highlights/106.jpg",
      title: "Drinques quentes para o inverno",
      description:
        "O frio chegou! Por isso separamos nossos melhores coquetéis para esquentar vocês nos dias mais frios. Aproveitem!",
      link: "",
    },
  ];

  const { order, image, title, description, link } =
    highlights[selectedHighlightIdx] || {};

  return (
    <div className="relative w-full min-h-[635px] mt-24 mb-36">
      <h1 className="font-serif text-[120px] font-bold text-gray-200 animate-slide-in-from-left">
        {order.toString().padStart(2, "0")}
      </h1>
      <div className="w-28 h-1 bg-black mt-1 mb-8 animate-slide-in-from-left" />
      <div className="relative font-serif text-6xl font-bold w-1/2 mb-10 text-gray-900 animate-slide-in-from-left">
        {title}
        <div className="absolute top-[36px] right-20 w-96 h-4 bg-amber-400 mt-1 mb-8 z-[-1]" />
      </div>
      <div className="w-2/5 text-gray-700 mb-8 animate-slide-in-from-left">
        {description}
      </div>
      <Button className="animate-slide-in-from-left">Veja mais</Button>
      <img src={image} alt={title} className="absolute top-0 right-0 z-[-2]" />
    </div>
  );
};

export default FeaturedHighlights;
