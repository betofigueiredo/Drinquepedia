import { Skeleton } from "@/components/ui/skeleton";

const LoadingInstructions = () => {
  const row = (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px] w-[305px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );

  return (
    <>
      <Skeleton className="mt-14 h-5 w-[250px]" />
      <div className="mt-16 grid grid-cols-4 gap-7">
        {row}
        {row}
        {row}
        {row}
      </div>
    </>
  );
};

export default LoadingInstructions;
