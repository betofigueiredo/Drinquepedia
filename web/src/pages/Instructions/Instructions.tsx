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
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-12">
        Dicas gerais
      </h1>
      <div className="grid grid-cols-4 gap-7 mt-14">
        {data?.instructions?.map((instruction) => (
          <InstructionCard key={instruction.id} instruction={instruction} />
        ))}
      </div>
    </div>
  );
};

export default Instructions;
