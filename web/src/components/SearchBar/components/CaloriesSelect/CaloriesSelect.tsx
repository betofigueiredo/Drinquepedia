import useSearchStore from "@/stores/useSearchStore";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CaloriesSelect = () => {
  const { calories, update } = useSearchStore();

  const onChangeCalories = (value: string) => {
    const newValue = value === "-" ? "" : value;
    update({ key: "calories", value: newValue });
  };

  return (
    <>
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
    </>
  );
};

export default CaloriesSelect;
