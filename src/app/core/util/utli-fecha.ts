export function formatDate(date: Date) {
  let sMonth =
    date.getMonth() + 1 > 10
      ? '' + (date.getMonth() + 1)
      : '0' + (date.getMonth() + 1);
  let sDay = date.getDate() >= 10 ? '' + date.getDate() : '0' + date.getDate();
  let formatFeha = date.getFullYear() + '-' + sMonth + '-' + sDay;
  return formatFeha;
}
