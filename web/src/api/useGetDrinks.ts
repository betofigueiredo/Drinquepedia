import { Drink } from "@/types/drink";
import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Response = { drinks: Drink[]; metadata: { totalCount: number } };

const useGetDrinks = ({
  page,
  perPage,
  category,
  search,
  calories,
  alcoholicContent,
}: {
  page: number;
  perPage: number;
  category?: string;
  search: string;
  calories: string;
  alcoholicContent: string;
}): { isPending: boolean; error: AxiosError | null; data?: Response } => {
  const { isPending, error, data } = useQuery({
    queryKey: ["drinks", page, category, search, calories, alcoholicContent],
    queryFn: async () => {
      const queryParams = {
        page,
        perPage,
        ...(category && { category }),
        ...(search && { search }),
        ...(calories && { calories }),
        ...(alcoholicContent && { alcoholicContent }),
      };
      const response = await makeRequest.get<{ data: Response }>(
        "/v1/drinks/",
        queryParams,
      );
      return response?.data || {};
    },
  });
  return { isPending, error, data };
};

export default useGetDrinks;
