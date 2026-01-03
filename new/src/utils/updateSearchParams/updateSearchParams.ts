type Props = {
  search: Record<string, string | number>;
  key: string;
  value: string;
};

const updateSearchParams = ({ search, key, value }: Props): string => {
  const params: Record<string, string | number> = {};

  // Copy existing search params
  for (const k of Object.keys(search)) {
    params[k] = search[k];
  }

  // Override the key with the new value
  params[key] = value;

  // If the value is empty, remove the key
  if (!value) {
    delete params[key];
  }

  // Reset page to 1 if key is not 'page'
  params.pagina = 1;

  // Build the query string
  let result = '?';
  for (const param of Object.keys(params)) {
    result += `${param}=${params[param]}&`;
  }

  // Remove the trailing '&' if it exists
  result = result.slice(0, -1);

  return result;
};

export default updateSearchParams;
