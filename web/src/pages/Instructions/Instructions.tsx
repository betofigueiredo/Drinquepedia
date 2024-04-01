import useGetInstructions from "@/api/useGetInstructions";
import InstructionCard from "@/components/InstructionCard";
import Loadings from "@/components/Loadings";

const Instructions = () => {
  const { isPending, error, data } = useGetInstructions();

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
      <h1 className="mt-12 font-serif text-3xl font-bold text-gray-700">
        Dicas gerais
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {data?.instructions?.map((instruction) => (
          <InstructionCard key={instruction.id} instruction={instruction} />
        ))}
      </div>
    </div>
  );
};

export default Instructions;
