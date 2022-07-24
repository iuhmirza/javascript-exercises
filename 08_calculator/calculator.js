const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(operands) {
	let total = 0;
  for(let i = 0; i < operands.length; i++) {
    total = total + operands[i];
  }
  return total;
};

const multiply = function(operand) {
  total = 1;
  for(let i = 0; i < operand.length; i++) {
    total = total * operand[i];
  }
  return total;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(operand) {
  total = 1;
  for(let i = 1; i < operand + 1; i++) {
    total = total * i;
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
