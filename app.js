// challenge one
let marks = [95, 66, 80, 59, 47, 77];
let students = ["Alia", "Dalia", "Salia", "Malia", "Liliya", "Jalaya"];

// for(let i = 0; i<students.length; i++){
//     if(marks[i]>=80 && marks[i]<=100){
//         console.log(`${students[i]} got A+`);
//     }
//     else if(marks[i]>=70 && marks[i]<=80){
//         console.log(`${students[i]} got A`);
//     }
//     else if(marks[i]>=60 && marks[i]<=70){
//         console.log(`${students[i]} got A-`);
//     }
//     else if(marks[i]>=50 && marks[i]<=60){
//         console.log(`${students[i]} got B`);
//     }
//     else if(marks[i]>=40 && marks[i]<=50){
//         console.log(`${students[i]} got C`);
//     }
//     else if(marks[i]>=30 && marks[i]<=40){
//         console.log(`${students[i]} got D`);
//     }
//     else {
//         console.log(`${students[i]} got faill`);
//     }
// }
// challenge two
let signalLight = ["red", "yellow", "green"];

// for(let i = 0; i<signalLight.length; i++){
//     if(signalLight[i]==='red'){
//         console.log(`${signalLight[i]} light you are in danger.`);
//     }
//     else if(signalLight[i]==='yellow'){
//         console.log(`${signalLight[i]} light you should stop.`);
//     }
//     else{
//         console.log(`${signalLight[i]} light you can go.`);
//     }
// }

//hw3

let works = [
  "unlock module at 8.pm",
  "practice video to watch",
  "take notes",
  "practice your self",
  "if face any trouble join suport sessions",
];
// console.log(works.length);
// for (let i = 0, j = 0; i < works.length; i++, j++) {
//   console.log(works[i]);
//   console.log(works[j]);
// }

// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],

//     crust: 'deep dish',

//     serves: 2

//    }

//    let x = pizza.toppings[2];
//    console.log(x);

// function squre(num){
//     return num * num;
// };
// console.log(squre(10));
// console.log(squre(5));

// function myName(x){

//     return console.log(x.toLowerCase());;
// }

// myName("MY Name is MAMUN")

// function namata(x){
//     for(let i = 1;  i<=10; i++){
//         console.log(x +' x '+ i +' = '+ x * i);
//     }
//     return;
// }

// namata(15);

// function calculator(singaraQuantity,somushaQuantity,taka) {
//   let singaraPrice = singaraQuantity * 6;
//   let somushaPrice = somushaQuantity * 7;
//   let totalPrice = singaraPrice + somushaPrice;
//   console.log(`total price : ${totalPrice} tk.`);
//   console.log(`dise:${taka} tk.`);
//    result = taka - totalPrice;
//    return console.log(`Return pabe:${result} tk.`);
// }

// calculator(10,10,200);

// function factorialNumber(num) {
//   var factorial = 1;
//   for (let i = 1; i <=num; i++) {
//     console.log((factorial = factorial * i));
//   }
// }
// factorialNumber(5)
// factorialNumber(7)

// celsiousTofarenhite
// function celsiousTofarenhite(c){
//   return console.log(`${c} celsious = `,(c * 9/5)+32 + ' F');
// }

// celsiousTofarenhite(2)
// celsiousTofarenhite(5)
// farenhiteTOcelsious
// function farenhiteTOcelsious(f) {
//  let  farenhite =  ((f - 32) * 5) / 9;
//  let result = farenhite.toFixed(2);
//  console.log(`${f} farenhite = ${result} Celsious`);
// }
// farenhiteTOcelsious(4)
//grade calculation

// function gradeCalculator(mark){
//   if(mark>80) console.log(`marks : ${mark} get A+`);
//   else if(mark<80 && 70<=mark) console.log(`marks : ${mark} get A`);
//   else if(mark<70 && 60<=mark) console.log(`marks : ${mark} get A-`);
//   else if(mark<60 && 50<=mark) console.log(`marks : ${mark} get B`);
//   else if(mark<50 && 40<=mark) console.log(`marks : ${mark} get C`);
//   else if(mark<40 && 33<=mark) console.log(`marks : ${mark} get D`);
//   else{
//     console.log(`marks : ${mark} get F`);
//   }

// }
// gradeCalculator(77);
// gradeCalculator(27);
// gradeCalculator(88);
//simple interest,,,,,,

// function simpleInterest(P,R,T){

//   let interest = Math.round(P*(R/100)*(T/12));
//   console.log(`${R}% hare ${P} takar ${T} mashe sud ase: ${interest} tk `);
//   let perMonth = Math.round((P + interest)/T);
//   console.log(`perMonth dite hobe :${perMonth} tk`);
// }

// simpleInterest(10000000,8,120);

// function leapYear(year) {
//   if (year % 4 === 0) console.log(`${year}, is a Leapyear`);
//   else if (year % 400 === 0) console.log(`${year}, is a Leapyear`);
//   else if (year % 100 === 0) console.log(`${year}, is not a Leapyear`);
//   else {
//     console.log(`${year}, is not a Leapyear`);
//   }
// }

// leapYear(1999);
// leapYear(2020);
// leapYear(2022);

// function oddNumber(x, y) {
//   var arr = [];
//   for (var number = x; number <= y; number++) {
//     if (number % 2 != 0) {
//       arr.push(number);
//     }
//   }
//   return arr;
// }

// let result = oddNumber(4, 50);
// console.log(result);

// let arr = [11, 3, 22, 2, 5];

// let x = arr.sort((a, b) => {
//  return a > b ? 1 : -1;
// });
// console.log(x);

// let tt = arr[2];
// console.log(tt);
// let res = arr.iOf(22);
// console.log(res);
// function avg() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / 2;
// }
// let x = avg();
// console.log(x);
// function getMinMax(arr) {
//   let min = Math.min(...arr);
//   return [min];
// }

// let result = getMinMax([11, 3, 22, 2, 5]);
// console.log(result);

// function area(l,h){
//   let area = l *h;
//   return area;
// }

// let res = area(40,20);
// console.log(`${res} sq unit`);

// function minMax(x,y,z){
//   if(x>y && x>z){
//     return`${x} is gater than ${y} , ${z}`;
//   }
//   else if(y>x && y>z){
//     return `${y} is gater than ${x} , ${z}`;
//   }
//   else{
//     return`${z} is gater than ${x} , ${y}`;
//   }
// }
// let res = minMax(44,2,77);
// console.log(res);

// function secondMax(arr) {
//   let max = Math.max(...arr); //find the max value from array
//   arr.splice(arr.iOf(max), 1); //remove the max value
//   let secondMax = Math.max(...arr);
//   return secondMax;
// }

// let x = secondMax([55, 77, 4, 66, 43]);
// console.log(x);

// var secondMax = function (arr) {
//   var max = Math.max.apply(null, arr); // get the max of the array
//   arr.splice(arr.iOf(max), 1); // remove max from the array
//   return Math.max.apply(null, arr); // get the 2nd max
// };

// var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
// var max2 = secondMax(arr);
// console.log(max2);

// const largest = function (array) {
//   let largest = 0;
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// };
// console.log(largest([22, 66, 123, 2, 88]));

// const smallest = function (array) {
//   let smallest = array[0];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element<=smallest){
//       smallest = element;
//     }
//   }
//   return smallest;
// };
// console.log(smallest([33,6,7,2,455,66,2]));

// const total = function (array) {
//   let total = 0;
//   let avg;
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     total+=element;
//      avg = total/2;
//   }
//   return avg;
// };
// console.log(total([33,88,2]));

/* const largestNegetiveValue = function (array) {
  let largestNegetiveValue = array[0];
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element>= largestNegetiveValue){
      largestNegetiveValue = element;
    }
  }
  return largestNegetiveValue;
};
console.log(largestNegetiveValue([-33,-88,-2,-20])); */

// shift + Alt + a

// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car',
//       'truck'
//     ];

// function recurse(counter = 0) {
//   let Newcounter = counter + 1;
//   if (counter === 2) {
//     return "done";
//   }
//   return recurse(Newcounter);
// }
// let output = recurse();
// console.log(output);

// area of triangle problem solve using herons formula

/* const areaOfTriangle = function (a, b, c) {
  let s = (a + b + c) / 2;
  return (output = Math.sqrt(s * (s - a) * (s - b) * (s - c)));
};

console.log(areaOfTriangle(5, 5, 6)); */

// function isPrime(number) {
//   if((number % 2 === 0 && number !== 2) || number <= 1) {
//       return false;
//   }

//   const limit = Math.floor(Math.sqrt(number));
//   console.log(limit);
//   for(let index = 3; index <= limit; index += 2) {
//       if (number % index === 0) {
//           return false;
//       }
//   }

//   return true;
// }
// console.log(isPrime(77));

// remove duplicate array

// let numbers = [2,5,2,4,1,6,3,5,3];
//  function uniqeNumber(numbers){
//   let uniqe = [];
//   let duplicate = [];
//   for(number of numbers){
//     if(uniqe.indexOf(number)==-1){
//       uniqe.push(number);
//     }
//     else{
//      duplicate.push(number);
//     }
//   }
//   console.log(duplicate);
//   return uniqe;

// }
// console.log(uniqeNumber(numbers));

// let number = 1;
// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     }
//         console.log(`${number} is a not prime number`);

// }
//prime number solution..................
// let isPrime = function (number) {
//   let isPrime = true;
//   if (number === 1) {
//     return `${number} is not a prime or composit number`;
//   } else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       return `${number} is a prime number`;
//     } else {
//       return `${number} is not a prime number`;
//     }
//   }
// };

// console.log(isPrime(10));

// while loop 7 to 19 even number..........

// let num = 7;
// while (num < 20) {
//   if (num % 2 === 1) {
//     console.log(num);
//   }
//   num++;
// }

// let arr = [1, 2, 83, 140, 25];

// console.log(arr.length);
// console.log(`${arr[4]}, arr[4] = 55`);
// arr.push(66,77);
// console.log(arr);
// arr.pop();
// console.log(arr);
// let indexOf3 = arr.indexOf(3);
// console.log(indexOf3);
// let x = arr.splice(indexOf3,1);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element>80) {
//     console.log(element);
//   }
// }

// function multipleOf3numbers(num1, num2, num3) {
//   let result = 0;
//   return result = num1 * num2 * num3;
// }

// console.log(multipleOf3numbers(3,2,2));

// const player = {
//   name:'sakib',
//   age:35,
//   type:'All-rounder'
// }

// player.name = 'miraz';
// console.log(player.name);

// function paperRequirements(book1,book2,book3) {
//   let pageNeeded = 0;
//   return pageNeeded = ((book1*100)+(book2*200)+(book3*300));
// }
// let result = console.log('pageNeeded,',paperRequirements(1,1,0));

// let friends = ["ranat", "ramnatK", "Mustofa", "ranaoa", "rana"];

// function bestFriend(friends) {
//   let bigName = "";
//   for (let friend of friends) {
//     if (bigName.length < friend.length) {
//       bigName = friend;
//     }
//   }
//   return bigName;
// }
// let result = bestFriend(friends);
// console.log(result);

// function positiveNumber(numbers) {
//   let positiveNumbersArray = [];
//   for (const number of numbers) {
//     if (number > 0) {
//       positiveNumbersArray.push(number);
//     } else {
//       break;
//     }
//   }
//   return positiveNumbersArray;
// }

// let result = positiveNumber([1,2,6,0,1,3]);
// console.log(result);
// fibonacchi serese

// let fibo = [0,1];

// for (let i = 2; i<4; i++) {
//   fibo[i] = fibo[i -1] + fibo[i -2];
// }
// console.log(fibo);

// reverse a string

// let string = 'problem solving';

// let splitString = string.split('').reverse().join('');
// console.log(splitString);

// function fact(num, product = 1) {
//   if (num == 1) return product;
//   let newProduct = product * num;
//   let newNum = num - 1;
//   return fact(newNum, newProduct);
// }
// console.log(fact(4));

// function fact(num){
//   if(num === 1){
//     return 1;
//   }
//   return fact(num - 1) * num;
// }

// console.log(fact(4));
// //recursion

// let a = "hi";
// let b = "there";
// console.log(a + b);

// function add(i) {
//   if (i === 1) {
//     return 0;
//   }
//   return add(i - 1) + i;
// }

// console.log(add(5));

// function repeter(char,num,output = '') {
//   if(num === output.length){
//     return output ;
//   }
//    return repeter('e',num,output + char);
// }
// console.log(repeter('e',6));

// let output = '';
// for (let i = 0; i < 2; i++) {
//  output = output + 'e';
// }
// console.log(output);

let array = [3, 6, 4, 12, 16, 17, 18];
let arr = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element % 3 === 0) {
    arr.push(element);
  }
}
// console.log(arr);

function sentenceCheck(str) {
  // how many string are there.....
  const scringCount = str.length;
  console.log("total string:", scringCount);

  // kon string koita ase..........
  let makeArray = Array.from(str);
  const countChar = makeArray.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, []);
  console.log("which string howMany:", countChar);

  // count carchrater ..........
  let vowel = 0;
  let consonent = 0;
  let emptyString = 0;
  let upperCase = 0;
  let lowerCase = 0;
  for (let char of makeArray) {
    if (
      char === "a" ||
      char === "A" ||
      char === "e" ||
      char === "E" ||
      char === "i" ||
      char === "I" ||
      char === "o" ||
      char === "O" ||
      char === "u" ||
      char === "U"
    ) {
      vowel++;
    } else if (char === " ") {
      emptyString++;
    } else if (char != " ") {
      consonent++;
    }
  }
  for (let char of makeArray) {
    if (char == char.toUpperCase() && char != " ") {
      upperCase++;
    } else if (char == char.toLowerCase() && char != " ") {
      lowerCase++;
    }
  }
  console.log("total vowel:", vowel);
  console.log("total consonent:", consonent);
  console.log("total empty string:", emptyString);
  console.log("total upperCase:", upperCase);
  console.log("total lowerCase:", lowerCase);
}
// const str1 = "Hello Good Morning Bangladesh";
// const str2 = "Hello Good Morning ";
// sentenceCheck(str1);
// sentenceCheck(str2);

// function crossCheck(arr1, arr2) {
//   for (let element of arr2) {
//     if (arr1.indexOf(element) != -1) {
//       console.table("yes");
//     } else {
//       console.table("no");
//     }
//   }
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 10, 5];
// crossCheck(arr1, arr2);

