// Day 1: JavaScript Basics

// ----------------------
// 1. ตัวแปร let / const
// ----------------------

// let = เปลี่ยนค่าได้
let age = 20;
age = 21; // เปลี่ยนค่าได้

// const = ค่าคงที่ เปลี่ยนไม่ได้
const name = "Noppharut";
// name = "Another"; ❌ จะ error

console.log("Name:", name);
console.log("Age:", age);

// ----------------------
// 2. ประเภทข้อมูล (Types)
// ----------------------
let text = "Hello"; // string (ข้อความ)
let number = 123;   // number
let isActive = true; // boolean
let nothing = null;  // null
let notDefined;      // undefined

console.log("Type of text:", typeof text);
console.log("Type of number:", typeof number);
console.log("Type of isActive:", typeof isActive);
console.log("Type of nothing:", typeof nothing);
console.log("Type of notDefined:", typeof notDefined);

// ----------------------
// 3. Template literals (``)
// ใช้แทรกตัวแปรใน string
// ----------------------

let city = "Bangkok";
let message = `Hello, my name is ${name}. I'm ${age} years old and I live in ${city}.`;

console.log(message);

// ----------------------
// 4. แบบฝึกหัดเล็กๆ: Calculator ง่ายๆ
// ----------------------

// สมมติเรามีตัวเลขสองตัว
let a = 10;
let b = 5;

// คำนวณและใช้ template literals แสดงผล
console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
