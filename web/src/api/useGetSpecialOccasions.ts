import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SpecialOccasions } from "@/types/drink";

type Response = {
  specialOccasions: SpecialOccasions[];
  metadata: { totalCount: number };
};

const useGetSpecialOccasions = (): {
  isPending: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, error, data } = useQuery({
    queryKey: ["specialOccasions"],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        "/v1/special-occasions"
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetSpecialOccasions;
