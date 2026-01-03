import { Link } from '@tanstack/react-router';
import type { Knowledge } from '@/types/knowledge';

const KnowledgeCard = ({ knowledge }: { knowledge: Knowledge }) => (
  <Link
    to="/tudosobrebar/$knowledgeSlug"
    params={{ knowledgeSlug: knowledge.slug }}
    className="group"
  >
    <div className="mb-14 text-slate-950">
      <div className="relative w-full overflow-hidden pt-[130%]">
        <img
          className="absolute inset-0 size-full object-cover transition-all duration-200 group-hover:scale-105 group-hover:opacity-90"
          src={`/images/knowledge/${knowledge.slug}.jpg`}
        />
      </div>
      <h1 className="mt-5 font-serif text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-amber-500">
        {knowledge.title}
      </h1>
      <div className="text-gray-500">{knowledge.subtitle}</div>
    </div>
  </Link>
);

export default KnowledgeCard;
