// ===== ЗАДАЧА 1 =====
// Сделай функцию hello(), которая возвращает "Hello"
function hello() {
  // TODO
}
console.log("1:", hello()); // должно: Hello

// ===== ЗАДАЧА 2 =====
// Сделай функцию add(a, b), которая возвращает сумму
function add(a, b) {
  // TODO
}
console.log("2:", add(2, 3)); // должно: 5

// ===== ЗАДАЧА 3 =====
// Сделай функцию isAdult(age): если age >= 18 вернуть true иначе false
function isAdult(age) {
  // TODO
}
console.log("3:", isAdult(20)); // true
console.log("3:", isAdult(15)); // false

// ===== ЗАДАЧА 4 =====
// Сделай функцию bigger(a, b): вернуть большее число
function bigger(a, b) {
  // TODO
}
console.log("4:", bigger(10, 5)); // 10
console.log("4:", bigger(3, 9)); // 9

// ===== ЗАДАЧА 5 =====
// Сделай функцию sumTo(n): сумма от 1 до n (цикл for)
// sumTo(5) = 1+2+3+4+5 = 15
function sumTo(n) {
  // TODO
}
console.log("5:", sumTo(5)); // 15

// ===== ЗАДАЧА 6 =====
// Сделай функцию countEven(arr): посчитать сколько чётных в массиве
function countEven(arr) {
  // TODO
}
console.log("6:", countEven([1, 2, 3, 4])); // 2

// ===== ЗАДАЧА 7 =====
// Сделай функцию first(arr): вернуть первый элемент массива
function first(arr) {
  // TODO
}
console.log("7:", first(["a", "b", "c"])); // a

// ===== ЗАДАЧА 8 =====
// Сделай функцию hasEmail(obj): вернуть true если obj.email существует, иначе false
function hasEmail(obj) {
  // TODO
}
console.log("8:", hasEmail({ email: "a@mail.com" })); // true
console.log("8:", hasEmail({})); // false

// ===== ЗАДАЧА 9 =====
// Сделай функцию toNumber(x):
// вернуть Number(x), но если получилось NaN — вернуть "error"
function toNumber(x) {
  // TODO
}
console.log("9:", toNumber("12")); // 12
console.log("9:", toNumber("12a")); // error

// ===== ЗАДАЧА 10 =====
// async/await: сделай функцию demo():
// 1) вывести "start"
// 2) подождать 300мс
// 3) вывести "end"
function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function demo() {
  // TODO
}

demo();
