import { Drink } from "@/types/drink";
import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";

type Response = { data: { drink: Drink } };

const useGetDrink = (drinkId?: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["drink", drinkId],
    queryFn: async () => {
      const response = await makeRequest.get<Response>(`/v1/drinks/${drinkId}`);
      return response?.data?.drink || {};
    },
  });
  return { isPending, error, data };
};

export default useGetDrink;
