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
  const urlKey = "teor";
  const [searchParams, setSearchParams] = useSearchParams();
  const alcoholicContent = searchParams.get(urlKey) ?? "";

  const onChangeAlcoholicContent = (value: string) => {
    const params = updateSearchParams({
      searchParams,
      key: urlKey,
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
