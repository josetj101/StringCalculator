function Add(str) {
  if (typeof str !== 'string') {
    throw TypeError('Invalid input')
  }
  if (!str) {
    return 0;
  }
  const [pattern, numbers] = str.split('\n');
  const delimiters = pattern.match(/(?<=\[)(.*?)(?=\])/g);
  return delimiters.reduce((nummberStr, delimiter) => nummberStr.replaceAll(delimiter,'y'), numbers)
    .split('y')
    .reduce((sum, num) => {
      const number = parseInt(num) || 0;
      if (number < 0) {
        throw Error('negatives not allowed');
      }
      return number > 1000 ? sum : sum + number;
    },0);
}

module.exports = Add;