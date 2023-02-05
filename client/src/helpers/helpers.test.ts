import { formatCurrency, displayPercent } from "./helpers"
const value = 33

test("is formatCurrency change value", () => {
  expect(formatCurrency(value)).toBe("$33.00")
})

test("is displayPercent change value", () => {
  expect(displayPercent(value)).toBe("33.00%")
})
