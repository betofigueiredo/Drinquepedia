import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Instruction } from "@/types/instruction";

type Response = {
  instruction: Instruction;
};

const useGetInstruction = ({
  instructionId,
}: {
  instructionId?: string;
}): {
  isPending: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, error, data } = useQuery({
    queryKey: ["instruction", instructionId],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        `/v1/instructions/${instructionId}`
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetInstruction;
