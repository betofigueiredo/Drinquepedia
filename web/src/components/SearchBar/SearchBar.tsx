import SearchInput from "./components/SearchInput";
import CaloriesSelect from "./components/CaloriesSelect";
import AlcoholicContentSelect from "./components/AlcoholicContentSelect";

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
        <AlcoholicContentSelect />
      </div>
    </div>
  );
};

export default SearchBar;
