// adds commas/rounds to given decimal. Example:  "1234.213" => "1,234.21"
const formatNumber = (str, x = 2) => {
  var parts = str.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (!parts[1]) return parts[0];
  parts[1] = parts[1].substring(0, x).replace(/0+$/g, "");
  if (!parts[1]) return parts[0];
  return parts.join(".");
};

export { formatNumber };
