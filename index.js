
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN 3-7
  if (fromN === toN) {
    return toN;
  }
  return fromN + sum(fromN + 1, toN)
}

module.exports = sum;
