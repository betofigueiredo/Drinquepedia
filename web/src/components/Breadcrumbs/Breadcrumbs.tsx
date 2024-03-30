import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

type Breadcrumb = {
  url?: string;
  label: string;
};

const Breadcrumbs = ({ list }: { list: Breadcrumb[] }) => {
  const currentItem = list[list.length - 1];
  const prevItems = list.slice(0, list.length - 1);

  return (
    <div className="pt-5">
      <Breadcrumb>
        <BreadcrumbList>
          {prevItems.map((item: Breadcrumb) => (
            <Fragment key={item.url}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={item?.url || ""}>{item.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{currentItem?.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
