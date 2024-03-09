import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="p-20">
      <Input placeholder="Search for drinks" />

      <div>
        <Label htmlFor="calories">Calorias</Label>
        <Select>
          <SelectTrigger id="calories" className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=" ">Todos</SelectItem>
            <SelectItem value="0-100">0 a 100</SelectItem>
            <SelectItem value="100-200">100 a 200</SelectItem>
            <SelectItem value="200-300">200 a 300</SelectItem>
            <SelectItem value="300-">+ 300</SelectItem>
          </SelectContent>
        </Select>
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
