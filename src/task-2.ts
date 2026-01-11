export type CurrencyType = "USD" | "EUR" | "UAH";

interface Params {
  amount: number;
  currency: CurrencyType;
}

function convertCurrency({ amount, currency }: Params): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 5, currency: "UAH" });
