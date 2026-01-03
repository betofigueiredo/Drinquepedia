import { useDocumentTitle } from 'usehooks-ts';
import useGetInstructions from '@/api/useGetInstructions';
import Errors from '@/components/Errors';
import Loadings from '@/components/Loadings';
import InstructionCard from '@/components/InstructionCard';

const Instructions = () => {
  const { isPending, error, data } = useGetInstructions();

  useDocumentTitle('Dicas - Drinquepedia');

  if (isPending) {
    return (
      <div className="container px-3">
        <Loadings.Instructions />
      </div>
    );
  }

  if (error) {
    return <Errors />;
  }

  return (
    <div className="container px-3">
      <h1 className="mt-12 font-serif text-3xl font-bold text-gray-700">
        Dicas gerais
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-4">
        {data?.instructions?.map((instruction) => (
          <InstructionCard key={instruction.id} instruction={instruction} />
        ))}
      </div>
    </div>
  );
};

export default Instructions;
