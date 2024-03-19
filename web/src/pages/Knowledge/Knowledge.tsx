import useGetKnowledge from "@/api/useGetKnowledge";
import Loadings from "@/components/Loadings";
import { useParams } from "react-router-dom";

const Knowledge = () => {
  const { knowledgeSlug } = useParams();
  const { isPending, error, data } = useGetKnowledge({ knowledgeSlug });

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

  const knowledge = data?.knowledge;

  return (
    <div className="container">
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-12">
        {knowledge?.title}
      </h1>
      <p
        className="text-gray-600 mt-8 mb-6"
        dangerouslySetInnerHTML={{ __html: knowledge?.description || "" }}
      />
    </div>
  );

  return <div className="container">Knowledge</div>;
};

export default Knowledge;
