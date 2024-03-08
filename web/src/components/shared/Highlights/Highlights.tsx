import { Button } from "@/components/ui/button";
import { useState } from "react";

const Highlights = () => {
  const [selectedHighlightIdx, setSelectedHighlightIdx] = useState<number>(0);

  const highlights = [
    {
      id: 1,
      order: 1,
      image: "/images/karly-gomez-Fk6ULMTxqj4-unsplash.png",
      title: "Caipirinhas especiais para este verão",
      description:
        "Com certeza a melhor opção para os dias quentes! Confira receitas com blueberrys, amoras, kiwis, morangos e muito mais",
      link: "/drinques",
    },
    {
      id: 2,
      order: 2,
      image: "https://via.placeholder.com/150",
      title: "Feature 2",
      description: "Description 2",
      link: "",
    },
    {
      id: 3,
      order: 3,
      image: "https://via.placeholder.com/150",
      title: "Feature 3",
      description: "Description 3",
      link: "",
    },
  ];

  const { order, image, title, description, link } =
    highlights[selectedHighlightIdx] || {};

  return (
    <div className="relative w-full mt-24">
      <h1 className="font-serif text-[120px] font-bold text-gray-200">
        {order.toString().padStart(2, "0")}
      </h1>
      <div className="w-28 h-1 bg-black mt-1 mb-8" />
      <div className="relative font-serif text-6xl font-bold w-1/2 mb-10 text-gray-900">
        {title}
        <div className="absolute top-[36px] right-20 w-96 h-4 bg-amber-400 mt-1 mb-8 z-[-1]" />
      </div>
      <div className="w-2/5 text-gray-700 mb-8">{description}</div>
      <Button>Veja mais</Button>
      <img src={image} alt={title} className="absolute top-0 right-0 z-[-2]" />
    </div>
  );
};

export default Highlights;
