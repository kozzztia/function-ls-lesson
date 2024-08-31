// console.log("function-ls-lesson")
// 1 normal Напиши всі можливі варіанти створення функцій.

// const doSomething = function(){
//     console.log("1")
// }

// function doNext(){
//     console.log("2")
// }

// const lastFunction = param => {
//     console.log(param)
// }

// 2 Створи функцію, яка буде виводити кількість переданих їй аргументів.

// getLength(2,3,4,5,3,2,3,4,6,"ww",3)

// function getLength (...params){
//     console.log(params.length)
// }

// 3 Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

// returnNumber()

// function returnNumber() {
//     const numbers = prompt('insert two numbers').split(',')

//     const [x,y] = numbers;

//     console.log(x,y)
//     let result;
//     if (x > y) {
//         result = -1
//     } else if (x < y) {
//         result = 1
//     } else if (x === y) {
//         result = 0
//     }
//     alert(`return ${result}`)
// }
// 4.Напиши функцію, яка обчислює факторіал переданого їй числа.

// returnFactorial()

// function returnFactorial() {

//     const number = prompt('insert one number', 2);

//     let factorial = 1;

//     if(number === 0){
//         factorial = 1;
//     }else{
//         for (let i = 1; i <= +number; i++) {

//             factorial = factorial * i;
//         }
//     }
//     alert(factorial)
// }
// 5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

// concatNumbers()

// function concatNumbers() {
//     const numbers = prompt('insert 3 numbers to concat', "1,2,3");
//     const result = numbers.split(',').join("");
//     alert(result)

// }
// 6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// const sides = prompt('insert square sides', '2,4');

// const array = sides.split(",");

// getSquareArea(array)

// function getSquareArea(args) {

//     let result;
//     switch (args.length) {
//         case 1: 
//             result = +args[0] * +args[0]
//             console.log(args)
//             break;
//         case 2:
//             result = +args[0] * +args[1]
//             break;

//         default:
//             result = 'no correct args'
//             break;
//     }
//     alert(result)   
// }

// normal 1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// isPerfectNumber()

// function isPerfectNumber() {
//     const number = prompt("insert number", 28)
//     let sum = 0;

//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum)
//     alert(+sum === +number?`number ${number} is perfect`:`number ${number} isn't perfect`)
// }


// const numbers = prompt('inser min - max number', "2-28");

// findPerfectNumbers(numbers)

// function findPerfectNumbers(args) {
//     const array = args.split("-")
//     let prefectNumbers = [];
//     const min = Math.min(...array);
//     const max = Math.max(...array);

//     for (let i = min; i <= max; i++) {
//         let sum = 0;

//         for (let j = 1; j <= i / 2; j++) {
//             if (i % j === 0) {
//                 sum += j;
//             }
//         }
//         +sum === +i? prefectNumbers.push(i): null
//     }
//     alert(prefectNumbers.join(', '))
// }