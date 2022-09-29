export const format2Number = (number: Number) =>
  number?.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
