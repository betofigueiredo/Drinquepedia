import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Knowledge } from "@/types/knowledge";

type Response = {
  knowledge: Knowledge;
};

const useGetKnowledge = ({
  knowledgeSlug,
}: {
  knowledgeSlug?: string;
}): {
  isPending: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, error, data } = useQuery({
    queryKey: ["knowledge", knowledgeSlug],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        `/v1/knowledges/${knowledgeSlug}`
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetKnowledge;
