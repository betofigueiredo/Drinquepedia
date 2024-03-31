import { Skeleton } from "@/components/ui/skeleton";

const LoadingDrinks = () => {
  const row = (
    <div className="mb-7 grid grid-cols-[max-content_1fr]">
      <Skeleton className="mr-5 size-16" />
      <div className="space-y-2 pt-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
  return (
    <>
      <Skeleton className="mt-14 h-5 w-[250px]" />
      <div className="mt-12">
        {row}
        {row}
        {row}
        {row}
      </div>
    </>
  );
};

export default LoadingDrinks;
