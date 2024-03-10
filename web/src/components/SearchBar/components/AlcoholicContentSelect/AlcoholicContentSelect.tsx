import useSearchStore from "@/stores/useSearchStore";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AlcoholicContentSelect = () => {
  const { alcoholicContent, update } = useSearchStore();

  const onChangeAlcoholicContent = (value: string) => {
    const newValue = value === "-" ? "" : value;
    update({ key: "alcoholicContent", value: newValue });
  };

  return (
    <>
      <Label htmlFor="alcoholic_content">Teor alcoólico</Label>
      <Select
        onValueChange={onChangeAlcoholicContent}
        defaultValue={alcoholicContent}
      >
        <SelectTrigger id="alcoholic_content" className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value=" ">Todos</SelectItem>
          <SelectItem value="LOW">Baixo</SelectItem>
          <SelectItem value="MEDIUM">Médio</SelectItem>
          <SelectItem value="HIGH">Alto</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default AlcoholicContentSelect;
