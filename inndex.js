// // 1) string (текст)
// const name = "Aman";
// const phone = "+77011234567";
// console.log("name:", name, "| typeof:", typeof name);
// console.log("phone:", phone, "| typeof:", typeof phone);

// // 2) number (число)
// const age = 20;
// const price = 15000;
// const percent = 12.5;
// console.log("age:", age, "| typeof:", typeof age);
// console.log("price:", price, "| typeof:", typeof price);
// console.log("percent:", percent, "| typeof:", typeof percent);

// // 3) boolean (да/нет)
// const isAdmin = false;
// const isPaid = true;
// console.log("isAdmin:", isAdmin, "| typeof:", typeof isAdmin);
// console.log("isPaid:", isPaid, "| typeof:", typeof isPaid);

// // 4) undefined (не задано)
// let email; // значение не присвоили
// console.log("email:", email, "| typeof:", typeof email);

// // 5) null (пусто специально)
// const deletedAt = null;
// console.log("deletedAt:", deletedAt, "| typeof:", typeof deletedAt); // да, покажет "object" — это странность JS

// // 6) object (объект / карточка)
// const user = {
//   id: 1,
//   name: "Aman",
//   age: 20,
//   phone: "+77011234567",
// };
// console.log("user:", user, "| typeof:", typeof user);

// // 7) array (массив / список)
// const numbers = [1, 2, 3];
// const users = [
//   { id: 1, name: "Aman" },
//   { id: 2, name: "Ali" },
// ];
// console.log("numbers:", numbers, "| isArray:", Array.isArray(numbers));
// console.log("users:", users, "| isArray:", Array.isArray(users));

// // 8) function (функция) — тоже тип данных в JS
// function sum(a, b) {
//   return a + b;
// }
// console.log("sum(2,3) =", sum(2, 3), "| typeof:", typeof sum);

// // 9) bigint (большие целые числа) — редко, но бывает
// const big = 9007199254740993n;
// console.log("big:", big, "| typeof:", typeof big);

// // 10) symbol (уникальный “ключ”) — редко для новичков
// const uniqueKey = Symbol("id");
// console.log("uniqueKey:", uniqueKey, "| typeof:", typeof uniqueKey);

// const arr = [1, 2, 3, 4, 5];
// console.log(typeof arr);
// console.log(Array.isArray(arr));
