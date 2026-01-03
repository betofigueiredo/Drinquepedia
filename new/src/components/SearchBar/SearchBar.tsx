import SearchInput from './components/SearchInput';
import CaloriesSelect from './components/CaloriesSelect';
import AlcoholicContentSelect from './components/AlcoholicContentSelect';

const SearchBar = () => (
  <div className="border-b border-slate-200 bg-gray-50 pb-10 pt-9">
    <div className="container mx-auto grid grid-flow-row gap-6 md:grid-flow-col md:justify-start pl-3">
      <SearchInput />
      <CaloriesSelect />
      <AlcoholicContentSelect />
    </div>
  </div>
);

export default SearchBar;
