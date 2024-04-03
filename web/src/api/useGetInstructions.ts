import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Instruction } from "@/types/instruction";

type Response = {
  instructions: Instruction[];
};

const useGetInstructions = (): {
  isPending: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, error, data } = useQuery({
    queryKey: ["instructions"],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        "/v1/instructions/",
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetInstructions;
