import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Breadcrumbs = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-7">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbSeparator className="rotate-180" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <button onClick={() => navigate(-1)}>Voltar</button>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
