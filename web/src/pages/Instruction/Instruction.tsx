import { useParams } from "react-router-dom";
import useGetInstruction from "@/api/useGetInstruction";
import Errors from "@/components/Errors";
import Loadings from "@/components/Loadings";
import Breadcrumbs from "@/components/Breadcrumbs";

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
    return <Errors />;
  }

  const instruction = data?.instruction;

  return (
    <div className="container mt-2">
      <Breadcrumbs />
      <h1 className="mt-6 font-serif text-3xl font-bold text-gray-700">
        {instruction?.title}
      </h1>
      <p
        className="mb-6 mt-8 text-gray-600"
        dangerouslySetInnerHTML={{ __html: instruction?.description || "" }}
      />
    </div>
  );
};

export default Instruction;
