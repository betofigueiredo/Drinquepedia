import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Knowledge } from "@/types/knowledge";

type Response = {
  knowledges: Knowledge[];
};

const useGetKnowledges = (): {
  isPending: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, error, data } = useQuery({
    queryKey: ["knowledges"],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        "/v1/knowledges/",
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetKnowledges;
