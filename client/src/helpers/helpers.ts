export const formatCurrency = (number: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number)
}

export const displayPercent = (percent: number): string =>
  `${(percent * 1).toFixed(2)}%`
