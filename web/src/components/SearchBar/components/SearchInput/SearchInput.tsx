import { ChangeEvent, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import useSearchStore from "@/stores/useSearchStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const { name, update } = useSearchStore();
  const [debouncedValue, setValue] = useDebounceValue(name, 800);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    update({ key: "name", value: debouncedValue });
  }, [update, debouncedValue]);

  return (
    <>
      <Label htmlFor="search">Nome / Ingrediente</Label>
      <Input
        id="search"
        defaultValue={name}
        onChange={onChangeName}
        placeholder="Search for drinks"
      />
    </>
  );
};

export default SearchInput;
