import SearchInput from "./components/SearchInput";
import CaloriesSelect from "./components/CaloriesSelect";
import AlcoholicContentSelect from "./components/AlcoholicContentSelect";

const SearchBar = () => (
  <div className="pt-8 pb-10 mb-14 bg-gray-50 border-b border-slate-200">
    <div className="container grid grid-flow-col gap-6 justify-start">
      <SearchInput />
      <CaloriesSelect />
      <AlcoholicContentSelect />
    </div>
  </div>
);

export default SearchBar;
