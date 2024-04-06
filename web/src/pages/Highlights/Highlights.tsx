import useGetHighlights from "@/api/useGetHighlights";
import Errors from "@/components/Errors";
import Loadings from "@/components/Loadings";
import HighlightCard from "@/components/HighlightCard";

const Highlights = () => {
  const { isPending, error, data } = useGetHighlights();

  if (isPending) {
    return (
      <div className="container">
        <Loadings.Highlights />
      </div>
    );
  }

  if (error) {
    return <Errors />;
  }

  const specialOccasions = data?.highlights.filter(
    (hightlight) => hightlight.type === "SPECIAL_OCCASION",
  );
  const generalHighlights = data?.highlights.filter(
    (hightlight) => hightlight.type === "GENERAL",
  );

  return (
    <div className="container">
      <h1 className="mt-12 font-serif text-3xl font-bold text-gray-700">
        Ocasiões especiais
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {specialOccasions?.map((specialOccasion) => (
          <HighlightCard key={specialOccasion.id} highlight={specialOccasion} />
        ))}
      </div>
      <h1 className="mt-20 font-serif text-3xl font-bold text-gray-700">
        Dicas do barman
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {generalHighlights?.map((generalHighlight) => (
          <HighlightCard
            key={generalHighlight.id}
            highlight={generalHighlight}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
