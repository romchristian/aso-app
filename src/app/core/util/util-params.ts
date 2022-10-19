import { formatDate } from './utli-fecha';

export function formatQueryParams(objOriginal: any) {
  let obj: any = Object.assign({}, objOriginal);
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (obj[prop] && Array.isArray(obj[prop])) {
      obj[prop] = obj[prop].map((e: any) => e.id).join(',');
    }

    if (obj[prop] instanceof Date) {
      obj[prop] = formatDate(obj[prop]);
      console.log(obj[prop]);
    }
  });
  for (var propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      !isNaN(Number(propName))
    ) {
      delete obj[propName];
    }
  }
  return obj;
}
