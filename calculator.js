function Add(str) {
  if (typeof str !== 'string') {
    throw TypeError('Invalid input')
  }
}

module.exports = Add;