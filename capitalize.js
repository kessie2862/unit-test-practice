const capitalize = (str) => {
  if (str.length === 0) {
    return '';
  }
  const firstChar = str.charAt(0).toUpperCase();
  const remainingString = str.slice(1);
  return `${firstChar}${remainingString}`;
};

module.exports = capitalize;
