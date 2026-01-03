import { Link, useCanGoBack, useRouter } from '@tanstack/react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type Props = {
  origin: 'drinques' | 'destaques' | 'tudosobrebar' | 'dicas';
};

const Breadcrumbs = ({ origin }: Props) => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  return (
    <div className="pt-7">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbSeparator className="rotate-180" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {canGoBack ? (
                <button
                  onClick={() => router.history.back()}
                  className="cursor-pointer"
                >
                  Voltar
                </button>
              ) : (
                <Link
                  to={`/${origin}`}
                  className="text-slate-800 underline transition-all hover:text-amber-500"
                >
                  Voltar
                </Link>
              )}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
