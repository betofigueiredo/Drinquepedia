import {
  Pagination as PaginationWrapper,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pagination = ({
  category,
  page,
  perPage,
  totalCount,
}: {
  category?: string;
  page: number;
  perPage: number;
  totalCount: number;
}) => {
  const totalPages = Math.ceil(totalCount / perPage);
  const hasPrevious = page > 1;
  const previous3Pages = [page - 3, page - 2, page - 1].filter((p) => p > 0);
  const next3Pages = [page + 1, page + 2, page + 3].filter(
    (p) => p <= totalPages,
  );
  const hasNext = page < totalPages;

  const toUrl = (p: number) => {
    const firstUrlPart = category ? `/drinques/${category}` : `/drinques/AaZ`;
    return p === 1 ? firstUrlPart : `${firstUrlPart}?pagina=${p}`;
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
              to={toUrl(page - 1)}
              className={hasPrevious ? "" : "pointer-events-none opacity-30"}
            />
          </PaginationItem>
          {previous3Pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink to={toUrl(p)}>{p}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink
              to={toUrl(page)}
              isActive
              className="pointer-events-none"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
          {next3Pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink to={toUrl(p)}>{p}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              to={toUrl(page + 1)}
              className={hasNext ? "" : "pointer-events-none opacity-30"}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationWrapper>
    </div>
  );
};

export default Pagination;
