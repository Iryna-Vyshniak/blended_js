//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

//const ask = prompt('What is the official name of JavaScript?');

// if (ask === 'ECMAScript') {
//   alert('True!');
// } else {
//   alert("Don't you know? ECMAScript!");
// }

//ask === 'ECMAScript' ? alert('True!') : alert("Don't you know? ECMAScript!");

//2. Напишіть програму, яка запитає у користувача через prompt "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

// const time = prompt("Enter the number of minutes to format");
// const hours = Math.floor(time / 60);
// const minutes = time % 60;

// console.log(
//   `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
// );

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню
// const min = 10;
// const max = 13;
// let multiply = 1;

// for (let i = max; i >= min; i -= 1) {
// 	if (i % 2 === 0) {
// 		// console.log(i);
// 		multiply *= i;

// 	}

// }
// console.log(multiply);
//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// const log = prompt("Hello, please enter your login!");
// let message;
// if (log === null) {
//   message = "Authorization has been cancelled";
// } else if (log !== "admin") {
//   message = "Goodbye!";
// } else {
//   const password = prompt("Please enter your password");
//   if (password === null) {
//     message = "Authorization has been cancelled";
//   } else if (password !== "adminPassword") {
//     message = "Goodbye!";
//   } else {
//     message = "Hello!";
//   }
// }
// console.log(message);

// const log = prompt("Hello, please enter your login!");
// let message;
// switch (log) {
//   case null:
//     message = "Authorization has been cancelled";
//     break;
//   case "admin":
//     const password = prompt("Please enter your password");
//     switch (password) {
//       case null:
//         message = "Authorization has been cancelled";
//         break;
//       case "adminPassword":
//         message = "Hello!";
//         break;

//       default:
//         message = "Goodbye!";
//         break;
//     }
//     break;
//   default:
//     message = "Goodbye!";
//     break;
// }
// console.log(message);
