import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SubNavigationMobile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<Record<string, string>>();
  const currentLocation =
    Object.values(params).reduce(
      (path, param) => path?.replace("/" + param, ""),
      location.pathname,
    ) || "/";
  const value =
    currentLocation.replace("/drinques", "").replace("/", "") || "AaZ";

  if (currentLocation.indexOf("/drinques") === -1) {
    return null;
  }

  const onChangeCalories = (value: string) => {
    navigate(`/drinques/${value}`);
  };

  return (
    <div className="fixed bottom-20 z-10 block h-14 w-full border-y border-slate-200 bg-gray-100 px-3 pt-2 text-center md:hidden">
      <Select onValueChange={onChangeCalories} value={value}>
        <SelectTrigger id="calories" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="AaZ">De A a Z</SelectItem>
          <SelectItem value="martinis">Martinis</SelectItem>
          <SelectItem value="tropicais">Tropicais</SelectItem>
          <SelectItem value="frozen">Frozen</SelectItem>
          <SelectItem value="quentes">Quentes</SelectItem>
          <SelectItem value="shot">Shots</SelectItem>
          <SelectItem value="classicos">Clássicos</SelectItem>
          <SelectItem value="semalcool">Sem Álcool</SelectItem>
          <SelectItem value="caipirinhas">Caipirinhas</SelectItem>
          <SelectItem value="smoothies">Smoothies</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SubNavigationMobile;
