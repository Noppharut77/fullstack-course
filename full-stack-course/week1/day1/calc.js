let a = 10;
let b = 5;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);



const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("ใส่เลขตัวแรก: ", (num1) => {
  rl.question("ใส่เลขตัวที่สอง: ", (num2) => {
    rl.question("เลือกเครื่องหมาย (+, -, *, /): ", (op) => {
      const a = Number(num1);
      const b = Number(num2);
      let result;

      if (op === "+") result = a + b;
      else if (op === "-") result = a - b;
      else if (op === "*") result = a * b;
      else if (op === "/") result = a / b;
      else result = "ไม่รู้จักเครื่องหมายนี้";

      console.log(`\nผลลัพธ์: ${a} ${op} ${b} = ${result}`);
      rl.close();
    });
  });
});
