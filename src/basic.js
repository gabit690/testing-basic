const sum = (operand1, operand2) => operand1 + operand2;

const cats = () => {
  return ["Fígaro", "Bruno", "Galileo", "Gala", "Ramsés"];
}

const compiledError = () => {
  throw new Error('You have errors of compilation.');
}

module.exports = {
  sum,
  cats,
  compiledError
};
