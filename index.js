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

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".

const number = prompt('Hello, enter please the number between  0 and 59');
const answerNum = Number(parseInt(number));

// if (answerNum > 59 || answerNum < 0) {
//   alert(`The ${answerNum} is outside 0 and 59`);
//   console.log(answerNum);
// } else if (answerNum <= 15) {
//   console.log(`Number ${answerNum} refers to 1 quarters`);
// } else if (answerNum <= 30) {
//   console.log(`Number ${answerNum} refers to 2 quarters`);
// } else if (answerNum <= 45) {
//   console.log(`Number ${answerNum} refers to 3 quarters`);
// } else {
//   console.log(`Number ${answerNum} refers to 4 quarters`);
// }
const quoter = Math.ceil(answerNum / 15);
if (answerNum > 59 || answerNum < 0) {
  alert(`The ${answerNum} is outside 0 and 59`);
} else {
  switch (quoter) {
    case 1:
      console.log(`Number ${answerNum} refers to 1 quarters`);
      break;
    case 2:
      console.log(`Number ${answerNum} refers to 2 quarters`);
      break;
    case 3:
      console.log(`Number ${answerNum} refers to 3 quarters`);
      break;
    case 4:
      console.log(`Number ${answerNum} refers to 4 quarters`);
      break;
    default:
      console.log(`The ${answerNum} is outside 0 and 59`);
      break;
  }
}
