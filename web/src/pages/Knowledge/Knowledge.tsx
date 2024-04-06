import useGetKnowledge from "@/api/useGetKnowledge";
import Breadcrumbs from "@/components/Breadcrumbs";
import Errors from "@/components/Errors";
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
    return <Errors />;
  }

  const knowledge = data?.knowledge;

  return (
    <div className="container mt-2">
      <Breadcrumbs />
      <h1 className="mt-6 font-serif text-3xl font-bold text-gray-700">
        {knowledge?.title}
      </h1>
      <p
        className="mb-6 mt-8 text-gray-600"
        dangerouslySetInnerHTML={{ __html: knowledge?.description || "" }}
      />
    </div>
  );
};

export default Knowledge;
