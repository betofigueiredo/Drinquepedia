import { useParams } from "react-router-dom";
import useGetHighlight from "@/api/useGetHighlight";

const Highlight = () => {
  const { highlightId } = useParams();
  const { isPending, error, data } = useGetHighlight({ highlightId });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const highlight = data?.highlight;

  return (
    <div className="container">
      <h1 className="font-serif font-bold text-3xl text-gray-700 mt-12">
        {highlight?.title}
      </h1>
      <p>{highlight?.subtitle}</p>
    </div>
  );
};

export default Highlight;
