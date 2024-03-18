import { Instruction } from "@/types/instruction";
import { Link } from "react-router-dom";

const InstructionCard = ({ instruction }: { instruction: Instruction }) => {
  return (
    <Link to={`/dicas/${instruction?.oldId}`} className="group">
      <div className="mb-14 text-slate-950">
        <div className="relative w-full pt-[130%] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-all duration-200 group-hover:scale-105"
            src={`/images/instructions/${instruction?.oldId}.jpg`}
          />
        </div>
        <h1 className="font-serif font-bold text-2xl text-gray-900 mt-5 group-hover:text-amber-500 transition-colors duration-200">
          {instruction.title}
        </h1>
        <div className="text-gray-500">{instruction.subtitle}</div>
      </div>
    </Link>
  );
};

export default InstructionCard;
