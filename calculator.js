function Add(str) {
  if (typeof str !== 'string') {
    throw TypeError('Invalid input')
  }
  if (!str) {
    return 0;
  }
  const delimiter = str.match(/(?<=\[)(.*?)(?=\])/g);
  return str.split(',')
    .reduce((arr, str) => [...arr, ...str.split('\n')],[])
    .reduce((arr, str) => [...arr, ...str.split(delimiter)],[])
    .map(i => (parseInt(i) || 0))
    .reduce((sum, num) => {
      if (num < 0) {
        throw Error('negatives not allowed');
      }
      return num > 1000 ? sum : sum + num;
    } , 0);
}

module.exports = Add;