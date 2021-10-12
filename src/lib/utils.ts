export const pluralize = (total: number, unit: string) =>
  `${total} ${unit}${total === 1 ? '' : 's'}`
