// #!/usr/bin/env node

// const { add, sub, mul, div } = require('./calculator');

// const [,, op, a, b] = process.argv;

// if (!op || !a || !b) {
//   console.log('Usage: node cli.js <add|sub|mul|div> <num1> <num2>');
//   process.exit(1);
// }

// const num1 = parseFloat(a);
// const num2 = parseFloat(b);

// if (isNaN(num1) || isNaN(num2)) {
//   console.log('Both operands must be numbers.');
//   process.exit(1);
// }

// let result;
// try {
//   switch (op) {
//     case 'add':
//       result = add(num1, num2);
//       break;
//     case 'sub':
//       result = sub(num1, num2);
//       break;
//     case 'mul':
//       result = mul(num1, num2);
//       break;
//     case 'div':
//       result = div(num1, num2);
//       break;
//     default:
//       console.log('Unknown operation. Use add, sub, mul, or div.');
//       process.exit(1);
//   }
//   console.log(`Result: ${result}`);
// } catch (err) {
//   console.log(err.message);
//   process.exit(1);
// } 