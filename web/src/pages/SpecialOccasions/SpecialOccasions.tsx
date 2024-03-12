import useGetSpecialOccasions from "@/api/useGetSpecialOccasions";
import SearchBar from "@/components/SearchBar";

const SpecialOccasions = () => {
  const { isPending, error, data } = useGetSpecialOccasions();
  const specialOccasions = data?.specialOccasions;

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <SearchBar />
      <div>Destaques laterais (caipirinhas e smoothies)</div>
      <div>
        {specialOccasions?.map((specialOccasion) => (
          <div key={specialOccasion.id}>asdasd</div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOccasions;
