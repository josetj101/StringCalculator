function Add(str) {
  if (typeof str !== 'string') {
    throw TypeError('Invalid input')
  }
  if (!str) {
    return 0;
  }
  return str.split(',')
    .reduce((arr, str) => [...arr, ...str.split('\n')],[])
    .map(i => parseInt(i))
    .reduce((sum, num) => (sum + num), 0);
}

module.exports = Add;