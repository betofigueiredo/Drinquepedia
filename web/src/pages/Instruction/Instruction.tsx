import { useParams } from "react-router-dom";
import useGetInstruction from "@/api/useGetInstruction";
import Loadings from "@/components/Loadings";

const Instruction = () => {
  const { instructionId } = useParams();
  const { isPending, error, data } = useGetInstruction({ instructionId });

  if (isPending) {
    return (
      <div className="container">
        <Loadings.Instruction />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const instruction = data?.instruction;

  return (
    <div className="container">
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-12">
        {instruction?.title}
      </h1>
      <p
        className="text-gray-600 mt-8 mb-6"
        dangerouslySetInnerHTML={{ __html: instruction?.description || "" }}
      />
    </div>
  );
};

export default Instruction;
