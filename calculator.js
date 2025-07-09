#!/usr/bin/env node

// Basic command-line calculator
const [,, op, a, b] = process.argv;

if (!op || !a || !b) {
  console.log('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(1);
}

const num1 = parseFloat(a);
const num2 = parseFloat(b);

if (isNaN(num1) || isNaN(num2)) {
  console.log('Both operands must be numbers.');
  process.exit(1);
}

let result;
switch (op) {
  case 'add':
    result = num1 + num2;
    break;
  case 'sub':
    result = num1 - num2;
    break;
  case 'mul':
    result = num1 * num2;
    break;
  case 'div':
    if (num2 === 0) {
      console.log('Cannot divide by zero.');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log('Unknown operation. Use add, sub, mul, or div.');
    process.exit(1);
}

console.log(`Result: ${result}`); 