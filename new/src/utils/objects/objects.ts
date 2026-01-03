/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const snakeToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/[_][a-z0-9]/g, (group) => group.slice(-1).toUpperCase());

const camelToSnake = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const transform = (data: any, func: Function) => {
  const isObject = Object.prototype.toString.call(data) === "[object Object]";
  const isArray = Array.isArray(data);

  if (!isObject && !isArray) {
    return data;
  }

  if (!isArray) {
    return Object.keys(data).reduce((acc: any, key: string) => {
      const value = data[key];
      const newKey = func(key);
      const newValue = transform(value, func);
      acc[newKey] = newValue;
      return acc;
    }, {});
  }

  return data.map((item): any[] => transform(item, func));
};

const objects = {
  transform: {
    toCamelCase: (data: any) => transform(data, snakeToCamel),
    toSnakeCase: (data: any) => transform(data, camelToSnake),
  },
};

export default objects;
