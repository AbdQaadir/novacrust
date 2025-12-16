export function numberWithCommas(
  value: string | number,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
): string {
  console.log({ value });
  if (value === null || value === undefined) return "";

  const number =
    typeof value === "number"
      ? value
      : Number(value.toString().replace(/,/g, ""));

  if (Number.isNaN(number)) return "";

  return number.toLocaleString("en-US", {
    minimumFractionDigits: options?.minimumFractionDigits,
    maximumFractionDigits: options?.maximumFractionDigits,
  });
}
