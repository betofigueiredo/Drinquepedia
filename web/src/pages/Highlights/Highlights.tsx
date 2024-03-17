import useGetHighlights from "@/api/useGetHighlights";
import HighlightCard from "@/components/HighlightCard";
import Loadings from "@/components/Loadings";

const Highlights = () => {
  const { isPending, error, data } = useGetHighlights();

  if (isPending) {
    return (
      <div className="container">
        <Loadings.Highlights />;
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const specialOccasions = data?.highlights.filter(
    (hightlight) => hightlight.type === "SPECIAL_OCCASION"
  );
  const generalHighlights = data?.highlights.filter(
    (hightlight) => hightlight.type === "GENERAL"
  );

  return (
    <div className="container">
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-12">
        Ocasiões especiais
      </h1>
      <div className="grid grid-cols-4 gap-7 mt-14">
        {specialOccasions?.map((specialOccasion) => (
          <HighlightCard key={specialOccasion.id} highlight={specialOccasion} />
        ))}
      </div>
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-20">
        Dicas do barman
      </h1>
      <div className="grid grid-cols-4 gap-7 mt-14">
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
