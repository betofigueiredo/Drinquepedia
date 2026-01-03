import { createServerFn } from '@tanstack/react-start';
import { instructions } from './instructions';

type Params = {
  instructionId: number;
};

export const getInstruction = createServerFn({ method: 'GET' })
  .inputValidator((data: Params) => data)
  .handler(async ({ data }) => {
    const instruction = instructions.find(
      (i) => i.oldId === data.instructionId,
    );
    return { instruction: !instruction ? null : instruction };
  });
