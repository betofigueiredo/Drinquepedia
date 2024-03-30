import { useState } from "react";
import { Link } from "react-router-dom";
import { useInterval } from "usehooks-ts";
import { Button } from "@/components/ui/button";

const FeaturedHighlights = () => {
  const [selectedHighlightIdx, setSelectedHighlightIdx] = useState<number>(0);
  const [delay, setDelay] = useState<number>(7000);
  const [stop, setStop] = useState<boolean>(false);

  useInterval(() => {
    setStop(true);
  }, delay);

  useInterval(() => {
    if (!stop) return;
    const nextIdx = selectedHighlightIdx === 2 ? 0 : selectedHighlightIdx + 1;
    setSelectedHighlightIdx(nextIdx);
    setStop(false);
  }, 100);

  const updateDelay = () => {
    const newDelay = delay === 7000 ? 7001 : 7000;
    setDelay(newDelay);
  };

  const goPrevious = () => {
    setStop(true);
    const nextIdx = selectedHighlightIdx === 0 ? 1 : selectedHighlightIdx - 2;
    setSelectedHighlightIdx(nextIdx);
    updateDelay();
  };

  const goNext = () => {
    setStop(true);
    updateDelay();
  };

  const highlights = [
    {
      id: 1,
      order: 1,
      image: "/images/highlights/102.jpg",
      title: "Caipirinhas especiais para este verão",
      description:
        "Com certeza a melhor opção para os dias quentes! Confira receitas com blueberrys, amoras, kiwis, morangos e muito mais",
      link: "/drinques/caipirinhas",
    },
    {
      id: 2,
      order: 2,
      image: "/images/highlights/103.jpg",
      title: "Smoothies saudáveis para o verão",
      description:
        "Smoothies são bebidas saudáveis feitas com frutas, iogurtes e outros ingredientes naturais. Perfeitos para o verão que está chegando.",
      link: "/drinques/smoothies",
    },
    {
      id: 3,
      order: 3,
      image: "/images/highlights/106.jpg",
      title: "Drinques quentes para o inverno",
      description:
        "O frio chegou! Por isso separamos nossos melhores coquetéis para esquentar vocês nos dias mais frios. Aproveitem!",
      link: "/dicas/10",
    },
  ];

  const { order, image, title, description, link } =
    highlights[selectedHighlightIdx] || {};

  return (
    <>
      <div className="relative mt-24 min-h-[635px] w-full">
        {stop ? (
          <></>
        ) : (
          <>
            <h1 className="animate-slide-in-from-left font-serif text-[120px] font-bold text-gray-200">
              {order.toString().padStart(2, "0")}
            </h1>
            <div className="mb-8 mt-1 h-1 w-28 animate-slide-in-from-left bg-black" />
            <div className="relative mb-10 w-1/2 animate-slide-in-from-left font-serif text-6xl font-bold text-gray-900">
              <Link to={link}>{title}</Link>
              <div className="absolute right-20 top-[36px] z-[-1] mb-8 mt-1 h-4 w-96 bg-amber-400" />
            </div>
            <div className="mb-8 w-2/5 animate-slide-in-from-left text-gray-700">
              {description}
            </div>
            <Link to={link}>
              <Button className="animate-slide-in-from-left">
                Veja mais detalhes
              </Button>
            </Link>
            <img
              src={image}
              alt={title}
              className="absolute right-0 top-0 z-[-2] animate-opacity-in"
            />
          </>
        )}
      </div>
      <div className="mb-36 mt-4 text-center text-gray-500">
        <button
          type="button"
          onClick={goPrevious}
          className="mr-8 border-none text-5xl outline-none transition-all hover:text-amber-500"
        >
          ←
        </button>
        <button
          type="button"
          onClick={goNext}
          className="border-none text-5xl outline-none transition-all hover:text-amber-500"
        >
          →
        </button>
      </div>
    </>
  );
};

export default FeaturedHighlights;
