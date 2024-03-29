import { Skeleton } from "@/components/ui/skeleton";

const LoadingDrinks = () => {
  const row = (
    <div className="grid grid-cols-[max-content_1fr] mb-7">
      <Skeleton className="h-16 w-16 mr-5" />
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
