import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    setValue("");
    navigate(`/drinques/AaZ?busca=${value}`);
  };

  return (
    <div className="absolute right-9 top-5 hidden w-64 max-w-sm items-center space-x-1 lg:flex">
      <Input
        id="search"
        value={value}
        onChange={onChangeSearch}
        placeholder="busca..."
      />
      <Button onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={16}
        >
          <path
            fill="#ffffff"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Search;
