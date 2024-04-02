import { ChangeEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounceValue } from "usehooks-ts";
import updateSearchParams from "@/utils/updateSearchParams";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const urlKey = "busca";
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(urlKey) ?? "";
  const [debouncedValue, setValue] = useDebounceValue(search, 800);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const isDifferent = debouncedValue !== search;
    if (!isDifferent) return;
    const params = updateSearchParams({
      searchParams,
      key: urlKey,
      value: debouncedValue,
    });
    setSearchParams(params);
  }, [debouncedValue, search, searchParams, setSearchParams]);

  return (
    <div className="w-full min-w-56 md:w-96">
      <Label htmlFor="search">Nome / Ingrediente</Label>
      <Input id="search" defaultValue={search} onChange={onChangeSearch} />
    </div>
  );
};

export default SearchInput;
