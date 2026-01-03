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

const AlcoholicContentSelect = () => {
  const navigate = useNavigate();
  const search = useSearch({ from: '/drinques/AaZ' });
  const alcoholicContent = search.teor ?? '';

  const onChangeAlcoholicContent = (value: string) => {
    const searchParams = updateSearchParams({
      search,
      key: 'teor',
      value: value === '-' ? '' : value,
    });
    navigate({ to: `/drinques/AaZ${searchParams}` });
  };

  return (
    <div>
      <Label htmlFor="alcoholic_content">Teor alcoólico</Label>
      <Select
        onValueChange={onChangeAlcoholicContent}
        defaultValue={alcoholicContent}
      >
        <SelectTrigger id="alcoholic_content" className="w-45">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-">Todos</SelectItem>
          <SelectItem value="LOW">Baixo</SelectItem>
          <SelectItem value="MEDIUM">Médio</SelectItem>
          <SelectItem value="HIGH">Alto</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AlcoholicContentSelect;
