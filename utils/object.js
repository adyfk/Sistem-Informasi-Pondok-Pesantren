export const isEmpty = (object) => {
  if (typeof object !== 'object') { return 0 }
  return Object.values(object).length === 0
}
