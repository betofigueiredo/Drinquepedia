import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Highlight } from "@/types/highlight";

type Response = {
  highlights: Highlight[];
};

const useGetHighlights = (): {
  isPending: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, error, data } = useQuery({
    queryKey: ["highlights"],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        "/v1/highlights"
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetHighlights;
