import useGetKnowledges from "@/api/useGetKnowledges";
import KnowledgeCard from "@/components/KnowledgeCard";
import Loadings from "@/components/Loadings";

const Knowledges = () => {
  const { isPending, error, data } = useGetKnowledges();

  if (isPending) {
    return (
      <div className="container">
        <Loadings.Instructions />;
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-12">
        Tudo sobre bar
      </h1>
      <div className="grid grid-cols-4 gap-7 mt-14">
        {data?.knowledges?.map((knowledge) => (
          <KnowledgeCard key={knowledge.id} knowledge={knowledge} />
        ))}
      </div>
    </div>
  );
};

export default Knowledges;
