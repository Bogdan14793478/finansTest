import { formatCurrency, displayPercent } from "./helpers"

test("is formatCurrency change value", () => {
  const value = 33
  expect(formatCurrency(value)).toBe("$33.00")
})

test("is displayPercent change value", () => {
  const value = 33
  expect(displayPercent(value)).toBe("33.00%")
})
