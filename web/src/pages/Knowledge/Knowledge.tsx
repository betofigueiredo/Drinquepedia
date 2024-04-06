import { useParams } from "react-router-dom";
import { useDocumentTitle } from "usehooks-ts";
import useGetKnowledge from "@/api/useGetKnowledge";
import Breadcrumbs from "@/components/Breadcrumbs";
import Errors from "@/components/Errors";
import Loadings from "@/components/Loadings";

const Knowledge = () => {
  const { knowledgeSlug } = useParams();
  const { isPending, error, data } = useGetKnowledge({ knowledgeSlug });
  const knowledge = data?.knowledge;

  useDocumentTitle(
    knowledge ? `${knowledge.title} - Drinquepedia` : "Drinquepedia",
  );

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
