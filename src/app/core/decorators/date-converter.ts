import { map, tap, filter } from 'rxjs/operators';
import { pipe } from 'rxjs';

export function TransformDate2(target: any, key: any, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function () {
    return originalMethod
      .apply(this)
      .pipe(map((obj) => Object.assign({}, obj, stringToDate(obj))));
  };
  return descriptor;
}

function isValidDate(sDate: any) {
  return sDate.toString().split('-').length === 3;
}

function stringToDate(obj: any) {
  return Object.keys(obj)
    .filter((key) => obj[key] && isValidDate(obj[key]))
    .map((key) => {
      const sDate = obj[key].toString().split('-');
      const date = new Date(sDate[0], sDate[1] - 1, sDate[2]);
      obj[key] = new Date(date);
    });
}
