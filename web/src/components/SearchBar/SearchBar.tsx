import SearchInput from "./components/SearchInput";
import CaloriesSelect from "./components/CaloriesSelect";
import AlcoholicContentSelect from "./components/AlcoholicContentSelect";

const SearchBar = () => (
  <div className="border-b border-slate-200 bg-gray-50 pb-10 pt-8">
    <div className="container grid grid-flow-col justify-start gap-6">
      <SearchInput />
      <CaloriesSelect />
      <AlcoholicContentSelect />
    </div>
  </div>
);

export default SearchBar;
