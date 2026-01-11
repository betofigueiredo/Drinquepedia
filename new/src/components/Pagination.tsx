import { useSearch } from '@tanstack/react-router';
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationWrapper,
} from '@/components/ui/pagination';
import updateSearchParams from '@/utils/updateSearchParams';

const Pagination = ({
  category,
  page,
  totalCount,
}: {
  category?: string;
  page: number;
  totalCount: number;
}) => {
  const search = category ? {} : useSearch({ from: '/drinques/AaZ' });
  const perPage = category === 'caipirinhas' ? 50 : 20;
  const totalPages = Math.ceil(totalCount / perPage);
  const hasPrevious = page > 1;
  const previous3Pages = [page - 3, page - 2, page - 1].filter((p) => p > 0);
  const next3Pages = [page + 1, page + 2, page + 3].filter(
    (p) => p <= totalPages,
  );
  const hasNext = page < totalPages;

  const toUrl = (p: number) => {
    const searchParams = updateSearchParams({
      search,
      key: 'pagina',
      value: String(p),
    });
    const firstUrlPart = category ? `/drinques/${category}` : `/drinques/AaZ`;
    return `${firstUrlPart}${searchParams}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pt-8">
      <PaginationWrapper>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={toUrl(page - 1)}
              className={hasPrevious ? '' : 'pointer-events-none opacity-30'}
            />
          </PaginationItem>
          {previous3Pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href={toUrl(p)}>{p}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink
              href={toUrl(page)}
              isActive
              className="pointer-events-none"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
          {next3Pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href={toUrl(p)}>{p}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href={toUrl(page + 1)}
              className={hasNext ? '' : 'pointer-events-none opacity-30'}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationWrapper>
    </div>
  );
};

export default Pagination;
