import { map } from 'rxjs/operators';

export function TransformDateToString(target: any, key: any, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function () {
    return originalMethod
      .apply(this)
      .pipe(map((obj) => Object.assign({}, obj, dateToString(obj))));
  };
  return descriptor;
}

/*function isValidDate(sDate: any) {
  return sDate.toString().split('-').length === 3;
}*/

function isValidDate(sDate: any) {
  return sDate instanceof Date;
}

function dateToString(obj: any) {
  return Object.keys(obj)
    .filter((key) => obj[key] && isValidDate(obj[key]))
    .map((key) => {
      const date = obj[key];
      obj[key] = date.toISOString();
      const time = obj[key].split('T')[1].split('.')[0];
      console.log(time);

      if (!hasMinutesOrSeconds(time.split(':'))) {
        obj[key] = obj[key].split('T')[0];
      } else {
        obj[key] = obj[key].split('T')[0] + ' ' + time;
      }
    });
}
function hasMinutesOrSeconds(timeArray: any) {
  return (
    timeArray.length === 3 &&
    (Number(timeArray[1]) > 0 || Number(timeArray[2]) > 0)
  );
}
