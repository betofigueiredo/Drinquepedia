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
      <div className="relative w-full min-h-[635px] mt-24">
        {stop ? (
          <></>
        ) : (
          <>
            <h1 className="font-serif text-[120px] font-bold text-gray-200 animate-slide-in-from-left">
              {order.toString().padStart(2, "0")}
            </h1>
            <div className="w-28 h-1 bg-black mt-1 mb-8 animate-slide-in-from-left" />
            <div className="relative font-serif text-6xl font-bold w-1/2 mb-10 text-gray-900 animate-slide-in-from-left">
              <Link to={link}>{title}</Link>
              <div className="absolute top-[36px] right-20 w-96 h-4 bg-amber-400 mt-1 mb-8 z-[-1]" />
            </div>
            <div className="w-2/5 text-gray-700 mb-8 animate-slide-in-from-left">
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
              className="absolute top-0 right-0 z-[-2] animate-opacity-in"
            />
          </>
        )}
      </div>
      <div className="mt-4 mb-36 text-center text-gray-500">
        <button
          type="button"
          onClick={goPrevious}
          className="text-5xl mr-8 border-none outline-none hover:text-amber-500 transition-all"
        >
          ←
        </button>
        <button
          type="button"
          onClick={goNext}
          className="text-5xl border-none outline-none hover:text-amber-500 transition-all"
        >
          →
        </button>
      </div>
    </>
  );
};

export default FeaturedHighlights;
