import { Drink } from "@/types/drink";
import makeRequest from "@/utils/makeRequest";
import { useQuery } from "@tanstack/react-query";

type Response = { data: { drinks: Drink[] } };

const useGetDrinks = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["drinks"],
    queryFn: async () => {
      const response = await makeRequest.get<Response>("/v1/drinks");
      return response?.data?.drinks || [];
    },
  });
  return { isPending, error, data };
};

export default useGetDrinks;
