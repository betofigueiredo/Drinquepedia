import { Drink } from "@/types/drink";
import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Response = { drinks: Drink[] };

const useGetSimilarDrinks = (
  drinkId?: number,
): {
  isPending: boolean;
  isRefetching: boolean;
  error: AxiosError | null;
  data?: Response;
} => {
  const { isPending, isRefetching, error, data } = useQuery({
    queryKey: ["similar-drinks", drinkId],
    queryFn: async () => {
      const response = await makeRequest.get<{ data: Response }>(
        `/v1/drinks/${drinkId}/similar`,
      );
      return response?.data || {};
    },
  });
  return { isPending, isRefetching, error, data };
};

export default useGetSimilarDrinks;
