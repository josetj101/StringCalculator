function Add(str) {
  if (typeof str !== 'string') {
    throw TypeError('Invalid input')
  }
  if (!str) {
    return 0;
  }
  return parseInt(str);
}

module.exports = Add;