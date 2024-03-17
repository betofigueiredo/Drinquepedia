import { Highlight } from "@/types/highlight";
import { Link } from "react-router-dom";

const HighlightCard = ({ highlight }: { highlight: Highlight }) => {
  return (
    <Link
      to={highlight?.customUrl ?? `/destaques/${highlight.oldId}`}
      className="group"
    >
      <div className="mb-6 text-slate-950">
        <div className="relative w-full pt-[130%] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-all duration-200 group-hover:scale-105"
            src={`/images/highlights/${highlight?.oldId}.jpg`}
          />
        </div>
        <h1 className="font-serif font-bold text-2xl text-gray-900 mt-5 group-hover:text-amber-500 transition-colors duration-200">
          {highlight.title}
        </h1>
        <div className="text-gray-500">{highlight.subtitle}</div>
      </div>
    </Link>
  );
};

export default HighlightCard;
