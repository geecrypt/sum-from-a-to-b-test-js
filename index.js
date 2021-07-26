const sum = (fromN, toN) => {
  const result = fromN;
  if (fromN !== toN) {
    return result + sum(fromN + 1, toN);
  } else {
    return result;
  }
};

console.log(sum(3, 7));

module.exports = sum;
