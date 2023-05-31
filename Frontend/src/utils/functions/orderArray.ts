export function orderArray(a: any, b: any, key: string) {
  if (a[key] < b[key]) return -1
  if (a[key] > b[key]) return 1

  return 0
}
