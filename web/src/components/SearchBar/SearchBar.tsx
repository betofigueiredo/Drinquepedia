import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SearchInput from "./components/SearchInput";
import CaloriesSelect from "./components/CaloriesSelect";

const SearchBar = () => {
  return (
    <div className="p-20">
      <div>
        <SearchInput />
      </div>
      <div>
        <CaloriesSelect />
      </div>

      <div>
        <Label htmlFor="alcoholic_content">Teor alcoólico</Label>
        <Select>
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
      </div>

      <div>
        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default SearchBar;
