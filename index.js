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

// const number = prompt('Hello, enter please the number between  0 and 59');
// const answerNum = Number(parseInt(number));

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
// const quoter = Math.ceil(answerNum / 15);

// if (Number.isNaN(answerNum)) {
//   alert(`Please, enter valid value - number from 1 to 59`);
// } else if (answerNum > 59 || answerNum < 0) {
//   alert(`The ${answerNum} is outside 0 and 59`);
// } else {
//   switch (quoter) {
//     case 1:
//       console.log(`Number ${answerNum} refers to 1 quarters`);
//       break;
//     case 2:
//       console.log(`Number ${answerNum} refers to 2 quarters`);
//       break;
//     case 3:
//       console.log(`Number ${answerNum} refers to 3 quarters`);
//       break;
//     case 4:
//       console.log(`Number ${answerNum} refers to 4 quarters`);
//       break;
//     default:
//       console.log(`The ${answerNum} is outside 0 and 59`);
//       break;
//   }
// }

// switch (true) {
//   case Number.isNaN(answerNum):
//     alert(`Please, enter valid value - number from 1 to 59`);
//     break;
//   case answerNum > 59 || answerNum < 0:
//     alert(`The ${answerNum} is outside 0 and 59`);
//     break;
//   default:
//     switch (quoter) {
//       case 1:
//         console.log(`Number ${answerNum} refers to 1 quarters`);
//         break;
//       case 2:
//         console.log(`Number ${answerNum} refers to 2 quarters`);
//         break;
//       case 3:
//         console.log(`Number ${answerNum} refers to 3 quarters`);
//         break;
//       case 4:
//         console.log(`Number ${answerNum} refers to 4 quarters`);
//         break;
//       default:
//         console.log(`The ${answerNum} is outside 0 and 59`);
//         break;
//     }
// }
//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

//2. Є об'єкт, в якому зберігаються зарплати команди.
//  Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат.
//  Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
// //   mango: 100,
// //   poly: 160,
// //   ajax: 1470,
// };

// function getTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	const values = Object.values(salaries);
// 	for (let value of values) {
// 		 totalSalary += value;
// 	}
// 	return totalSalary;
// }
// console.log(getTotalSalary(salaries));

// 4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями
// const calculator = {
//   read(a, b) {
//     this.prop1 = a;
//     this.prop2 = b;
//   },
//   sum() {
//     if (typeof this.prop1 === 'number' && typeof this.prop2 === 'number') {
//       return this.prop1 + this.prop2;
//     }
//     return null;
//   },
//   mult() {
//     if (typeof this.prop1 === 'number' && typeof this.prop2 === 'number') {
//       return this.prop1 * this.prop2;
//     }
//     return null;
//   },
// };
// calculator.read(12, 10);
// console.log(calculator.sum());
// calculator.read(12, 10);
// console.log(calculator.mult());

//5. Напишіть функцію updateObject, яка приймає об'єкт та ключ
//і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}
// const updateObject = function( object, removeKey){
//       const newObject = {};
//       const arrayKeys = Object.keys(object);
//       for (const key of arrayKeys) {
//         if(key !== removeKey){
//           newObject[key] = object[key];
//         }
//       }return newObject;
//     }
//     console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b'));

// *3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем
// const stones = [
//   { name: 'emerald', price: 1300, quantity: 4 },
//   { name: 'diamond', price: 2700, quantity: 6 },
//   { name: 'sapphire', price: 400, quantity: 7 },
//   { name: 'rubble', price: 150, quantity: 100 },
// ];
// const calcTotalPrice = function (stones, stonesName) {
//   let totalPrice = 0;
//   for (let stone of stones) {
//     if (stone.name === stonesName) {
//       totalPrice = stone.price * stone.quantity;
//     }
//   }
//   return totalPrice;
// };
// console.log(calcTotalPrice(stones, 'emerald'));
// console.log(calcTotalPrice(stones, 'diamond'));
// console.log(calcTotalPrice(stones, 'sapphire'));
// console.log(calcTotalPrice(stones, 'rubble'));

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// function updateObject(data, ...array) {
//   const newObject = {};
//   const arrayKeys = Object.keys(data);
//   for (const key of arrayKeys) {
//     if (!array.includes(key)) {
//       newObject[key] = data[key];
//     }
//   }
//   return newObject;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "c"));
// console.log(updateObject({ a: 1, b: 2, c: 3 }));
// 7. Напишіть функцію changeObject, яка приймає як параметр об'єкт
// та повертає масив, в якому кожен елемент це масив, який складається з двох елементів [key, value]
// Очікуваний результат console.log(changeObject({ a: 1, b: 2, c: 3 })) // [["a", 1], ["b", 2], ["c", 3]]
// const user = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };
// const changeObject = (user) => Object.entries(user);
// console.log(changeObject(user));

// 2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентіфікатор у властивість id та викликає callback
//передаючи йому створений об'єкт.
//showProduct(product) - коллбек, що приймає об'єкт
//продукта і логірує його в консоль

// const makeProduct = function(name, price, callback){
//     const product = {
//         name: name,
//         price: price,
//         id: Math.random(),
//     }
//     callback(product);
// }
// const showProduct = function(product){
//     console.log(product);
// }
// makeProduct('apple', '120', showProduct)

// 3. Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), яка памятає ім'я шефа під час її виклику
//Функція makeDish має логіровать "<shef> is cooking <dish>"

// function makeShef(shefName) {
//   function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   }
//   return makeDish;
// }
// // console.log(makeShef("shef"));
// const shef = makeShef("shef");
// shef("pizza");

// 4. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// 5. Виправте код, щоб він працював
// function callAction(callback) {
//   callback();
// }

// const item = {
//   getQuantity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuantity.bind(item));

// 6. Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//яка застосується до кожного елемента масива.
//Функція each має повернути новий масив, елементами
//якого будуть результати виклику callback.
//callback функція має множити елементи на 2

// function each(array, callback) {
//   return array.map((number) => callback(number));
// }
// function mult(number) {
//   return number * 2;
// }
// console.log(each([1, 2, 5, 6], mult));

// 7. Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка лічить і виводе в консоль кількість своїх викликів

// function makeCounter() {
//   let total = 0;
//   return function foo() {
//     total += 1;
//     console.log(total);
//   };
// }

// const counter = makeCounter();
// const counter2 = makeCounter();
// console.log(counter);
// counter();
// counter();
// counter();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();

// 8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

// function savePassword(orgPassword) {
//   function checkPassword(newPassword) {
//     console.log(orgPassword === newPassword);
//   }
//   return checkPassword;
// }
// const romaPassword = savePassword("RomaYYY");
// romaPassword("vika");
// romaPassword("RomaYYY");

/*
Задача 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (подивіться на елементи розмітки в html файлі)
*/
// const butEL = document.querySelector("#alertButton");
// const inputEL = document.querySelector("#alertInput");
// butEL.addEventListener("click", onButClick);
// function onButClick() {
//   console.log(inputEL.value);
// }
