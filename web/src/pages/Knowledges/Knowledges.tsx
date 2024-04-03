import useGetKnowledges from "@/api/useGetKnowledges";
import KnowledgeCard from "@/components/KnowledgeCard";
import Loadings from "@/components/Loadings";

const Knowledges = () => {
  const { isPending, error, data } = useGetKnowledges();

  if (isPending) {
    return (
      <div className="container">
        <Loadings.Instructions />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-12 font-serif text-3xl font-bold text-gray-700">
        Tudo sobre bar
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {data?.knowledges?.map((knowledge) => (
          <KnowledgeCard key={knowledge.id} knowledge={knowledge} />
        ))}
      </div>
    </div>
  );
};

export default Knowledges;
