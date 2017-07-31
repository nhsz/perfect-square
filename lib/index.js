'use strict'

module.exports = (number) => {
  if (number === 0) {
    return true
  } else {
    return number % Math.sqrt(number) === 0
  }
}
