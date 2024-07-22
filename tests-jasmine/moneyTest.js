import { formatCurrency } from "../scripts/utils/money.js";

describe('test suit: formatCurrency', () => {
  it('converts cents into dollars',() => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('converts 0 into dollars',() => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  })
});