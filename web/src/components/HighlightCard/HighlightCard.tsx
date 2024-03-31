import { Highlight } from "@/types/highlight";
import { Link } from "react-router-dom";

const HighlightCard = ({ highlight }: { highlight: Highlight }) => {
  return (
    <Link
      to={highlight?.customUrl ?? `/destaques/${highlight?.oldId}`}
      className="group"
    >
      <div className="mb-6 text-slate-950">
        <div className="relative w-full overflow-hidden pt-[130%]">
          <img
            className="absolute inset-0 size-full object-cover transition-all duration-200 group-hover:scale-105 group-hover:opacity-90"
            src={`/images/highlights/${highlight?.oldId}.jpg`}
          />
        </div>
        <h1 className="mt-5 font-serif text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-amber-500">
          {highlight.title}
        </h1>
        <div className="text-gray-500">{highlight.subtitle}</div>
      </div>
    </Link>
  );
};

export default HighlightCard;
