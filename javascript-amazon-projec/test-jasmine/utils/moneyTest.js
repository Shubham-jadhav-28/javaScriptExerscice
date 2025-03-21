import { formatCurrency } from "../../scripts/utils/money.js";

describe("test site :formatCurrency", () => {
  it("converts cents to dollars and cents", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("work with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("rounds up to the nearst cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});
