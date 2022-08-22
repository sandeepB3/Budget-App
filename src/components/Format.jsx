//Formats the currency to INR with 0 decimals

const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "inr",
    style: "currency",
    minimumFractionDigits: 0,
  });
  
export default currencyFormatter;