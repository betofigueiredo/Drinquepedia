import { useSearchParams } from "react-router-dom";
import updateSearchParams from "@/utils/updateSearchParams";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CaloriesSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const calories = searchParams.get("calories") ?? "";

  const onChangeCalories = (value: string) => {
    const params = updateSearchParams({
      searchParams,
      key: "calories",
      value: value === "-" ? "" : value,
    });
    setSearchParams(params);
  };

  return (
    <div>
      <Label htmlFor="calories">Calorias</Label>
      <Select onValueChange={onChangeCalories} defaultValue={calories}>
        <SelectTrigger id="calories" className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-">Todos</SelectItem>
          <SelectItem value="0-100">0 a 100</SelectItem>
          <SelectItem value="100-200">100 a 200</SelectItem>
          <SelectItem value="200-300">200 a 300</SelectItem>
          <SelectItem value="300-">+ 300</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CaloriesSelect;
