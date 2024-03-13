import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Highlight } from "@/types/highlight";

type Response = {
  highlight: Highlight;
};

const useGetHighlight = ({
  highlightId,
}: {
  highlightId?: string;
}): {
  isPending: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, error, data } = useQuery({
    queryKey: ["highlight", highlightId],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        `/v1/highlights/${highlightId}`
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetHighlight;
