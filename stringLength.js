const stringLength = (str) => {
  if (str.length >= 1 && str.length <= 10) {
    return str.length;
  } else {
    return 'string must be at least 1 character long and not longer than 10 characters';
  }
};

module.exports = stringLength;
