import { useEffect } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useDebounceValue } from 'usehooks-ts';
import type { ChangeEvent } from 'react';
import updateSearchParams from '@/utils/updateSearchParams';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const SearchInput = () => {
  const navigate = useNavigate();
  const search = useSearch({ from: '/drinques/AaZ' });
  const value = search.busca ?? '';
  const [debouncedValue, setValue] = useDebounceValue(value, 800);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const isDifferent = debouncedValue !== value;
    if (!isDifferent) return;
    const searchParams = updateSearchParams({
      search,
      key: 'busca',
      value: debouncedValue,
    });
    navigate({ to: `/drinques/AaZ${searchParams}` });
  }, [debouncedValue, value, search]);

  return (
    <div className="w-full min-w-56 md:w-96">
      <Label htmlFor="search">Nome / Ingrediente</Label>
      <Input id="search" defaultValue={value} onChange={onChangeSearch} />
    </div>
  );
};

export default SearchInput;
