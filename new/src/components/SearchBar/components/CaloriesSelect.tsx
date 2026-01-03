import { useNavigate, useSearch } from '@tanstack/react-router';
import updateSearchParams from '@/utils/updateSearchParams';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CaloriesSelect = () => {
  const navigate = useNavigate();
  const search = useSearch({ from: '/drinques/AaZ' });
  const calories = search.calorias ?? '';

  const onChangeCalories = (value: string) => {
    const searchParams = updateSearchParams({
      search,
      key: 'calorias',
      value: value === '-' ? '' : value,
    });
    navigate({ to: `/drinques/AaZ${searchParams}` });
  };

  return (
    <div>
      <Label htmlFor="calories">Calorias</Label>
      <Select onValueChange={onChangeCalories} defaultValue={calories}>
        <SelectTrigger id="calories" className="w-45">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-">Todos</SelectItem>
          <SelectItem value="0-100">0 a 100</SelectItem>
          <SelectItem value="100-200">100 a 200</SelectItem>
          <SelectItem value="200-300">200 a 300</SelectItem>
          <SelectItem value="300-">+ 300</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CaloriesSelect;
