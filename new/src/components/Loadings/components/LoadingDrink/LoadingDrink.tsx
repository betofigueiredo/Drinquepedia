import { Skeleton } from "@/components/ui/skeleton";

const LoadingDrink = () => {
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-4">
      <div className="pr-36 pt-14">
        <Skeleton className="h-[325px] w-[250px] rounded-xl" />
      </div>
      <div>
        <Skeleton className="mt-14 h-5 w-[250px]" />
        <Skeleton className="mt-14 h-5 w-[100px]" />
        <Skeleton className="mt-4 h-5 w-[100px]" />
        <Skeleton className="mt-4 h-5 w-[100px]" />
      </div>
    </div>
  );
};

export default LoadingDrink;
