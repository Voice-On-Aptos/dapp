import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currencyFormatter = (
  value: number,
  fractionDigits = 0,
  currency = ""
) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
  }).format(value);
  return formatted.replace(currency, "");
};

export function shortenAddress(address: string) {
  if (address.length < 10) {
    // If the address is too short to be shortened, return it as is
    return address;
  }

  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}.....${end}`;
}

export function formatLargeNumber(number: number): string {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return number.toLocaleString();
  }
}
