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

const AlcoholicContentSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const alcoholicContent = searchParams.get("alcoholicContent") ?? "";

  const onChangeAlcoholicContent = (value: string) => {
    const params = updateSearchParams({
      searchParams,
      key: "alcoholicContent",
      value: value === "-" ? "" : value,
    });
    setSearchParams(params);
  };

  return (
    <div>
      <Label htmlFor="alcoholic_content">Teor alcoólico</Label>
      <Select
        onValueChange={onChangeAlcoholicContent}
        defaultValue={alcoholicContent}
      >
        <SelectTrigger id="alcoholic_content" className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-">Todos</SelectItem>
          <SelectItem value="LOW">Baixo</SelectItem>
          <SelectItem value="MEDIUM">Médio</SelectItem>
          <SelectItem value="HIGH">Alto</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AlcoholicContentSelect;
