type Props = { searchParams: URLSearchParams; key: string; value: string };
type Response = { [k: string]: string };

const updateSearchParams = ({ searchParams, key, value }: Props): Response => {
  const params: Response = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  params[key] = value;
  if (!value) delete params[key];
  return params;
};

export default updateSearchParams;
