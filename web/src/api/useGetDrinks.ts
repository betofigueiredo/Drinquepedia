import { Drink } from "@/types/drink";
import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";

type Response = { data: { drinks: Drink[] } };

const useGetDrinks = ({
  page,
  name,
  calories,
}: {
  page: number;
  name: string;
  calories: string;
}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["drinks", page, name, calories],
    queryFn: async () => {
      const queryParams = {
        page,
        perPage: 20,
        ...(name && { name }),
        ...(calories && { calories }),
      };
      const response = await makeRequest.get<Response>(
        "/v1/drinks",
        queryParams
      );
      return response?.data?.drinks || [];
    },
  });
  return { isPending, error, data };
};

export default useGetDrinks;
