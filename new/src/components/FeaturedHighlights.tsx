import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useInterval } from 'usehooks-ts';
import { Button } from '@/components/ui/button';

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
      image: '/images/highlights/102.jpg',
      title: 'Caipirinhas especiais para este verão',
      description:
        'Com certeza a melhor opção para os dias quentes! Confira receitas com blueberrys, amoras, kiwis, morangos e muito mais',
      link: '/drinques/caipirinhas',
    },
    {
      id: 2,
      order: 2,
      image: '/images/highlights/103.jpg',
      title: 'Smoothies saudáveis para o verão',
      description:
        'Smoothies são bebidas saudáveis feitas com frutas, iogurtes e outros ingredientes naturais. Perfeitos para o verão que está chegando.',
      link: '/drinques/smoothies',
    },
    {
      id: 3,
      order: 3,
      image: '/images/highlights/106.jpg',
      title: 'Drinques quentes para o inverno',
      description:
        'O frio chegou! Por isso separamos nossos melhores coquetéis para esquentar vocês nos dias mais frios. Aproveitem!',
      link: '/destaques/10',
    },
  ];

  const { order, image, title, description, link } =
    highlights[selectedHighlightIdx] || {};

  return (
    <>
      <div className="relative mt-12 min-h-140 w-full md:mt-24 md:min-h-[635px]">
        {stop ? (
          <></>
        ) : (
          <>
            <h1 className="hidden animate-slide-in-from-left font-serif text-[120px] font-bold text-gray-200 md:block">
              {order.toString().padStart(2, '0')}
            </h1>
            <img
              src={image}
              alt={title}
              className="relative right-0 top-0 z-[-2] block animate-opacity-in md:hidden"
            />
            <div className="mb-8 mt-1 hidden h-1 w-28 animate-slide-in-from-left bg-black md:block" />
            <div className="relative mb-10 mt-5 w-full animate-slide-in-from-left font-serif  text-4xl font-bold text-gray-900 md:mt-0 md:w-1/2 md:text-6xl">
              <Link to={link}>{title}</Link>
              <div className="absolute right-20 top-9 z-[-1] mb-8 mt-1 hidden h-4 w-96 bg-amber-400 md:block" />
            </div>
            <div className="mb-8 w-full animate-slide-in-from-left text-gray-700 md:w-2/5">
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
              className="absolute right-0 top-0 z-[-2] hidden animate-opacity-in md:block"
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
