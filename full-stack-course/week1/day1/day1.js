const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Put the frist number:", (input1) => {
    rl.question("Put the second number:", (input2) => {
        const num1 = Number(input1);
        const num2 = Number(input2);

        console.log(`ผลบวก: ${num1 + num2}`);
        console.log(`ผลลบ: ${num1 - num2}`);
        console.log(`ผลคูณ: ${num1 * num2}`);
        console.log(`ผลหาร: ${num1 / num2}`);

            rl.close();
    });
});