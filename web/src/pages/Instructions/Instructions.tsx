import useGetInstructions from "@/api/useGetInstructions";

const Instructions = () => {
  const { isPending, error, data } = useGetInstructions();

  console.log(isPending, error, data);

  return <div className="container">Instructions</div>;
};

export default Instructions;
