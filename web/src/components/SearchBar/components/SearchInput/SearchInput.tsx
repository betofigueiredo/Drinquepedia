import { ChangeEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounceValue } from "usehooks-ts";
import updateSearchParams from "@/utils/updateSearchParams";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const [debouncedValue, setValue] = useDebounceValue(name, 800);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const isDifferent = debouncedValue !== name;
    if (!isDifferent) return;
    const params = updateSearchParams({
      searchParams,
      key: "name",
      value: debouncedValue,
    });
    setSearchParams(params);
  }, [debouncedValue, searchParams, setSearchParams]);

  return (
    <div className="w-96">
      <Label htmlFor="search">Nome / Ingrediente</Label>
      <Input id="search" defaultValue={name} onChange={onChangeName} />
    </div>
  );
};

export default SearchInput;
