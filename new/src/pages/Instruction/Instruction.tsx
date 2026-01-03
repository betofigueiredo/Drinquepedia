import { useParams } from 'react-router-dom';
import { useDocumentTitle } from 'usehooks-ts';
import useGetInstruction from '@/api/useGetInstruction';
import Errors from '@/components/Errors';
import Loadings from '@/components/Loadings';
import Breadcrumbs from '@/components/Breadcrumbs';

const Instruction = () => {
  const { instructionId } = useParams();
  const { isPending, error, data } = useGetInstruction({ instructionId });
  const instruction = data?.instruction;

  useDocumentTitle(
    instruction ? `${instruction.title} - Drinquepedia` : 'Drinquepedia',
  );

  if (isPending) {
    return (
      <div className="container px-3">
        <Loadings.Instruction />
      </div>
    );
  }

  if (error) {
    return <Errors />;
  }

  return (
    <div className="container px-3 mt-2">
      <Breadcrumbs origin="dicas" />
      <h1 className="mt-6 font-serif text-3xl font-bold text-gray-700">
        {instruction?.title}
      </h1>
      <p
        className="mb-6 mt-8 text-gray-600"
        dangerouslySetInnerHTML={{ __html: instruction?.description || '' }}
      />
    </div>
  );
};

export default Instruction;
