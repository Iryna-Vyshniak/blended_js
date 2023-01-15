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
