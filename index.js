// //  Arithmetic Operator  
// console.log(10 + 10);  
// console.log(10 - 10);  
// console.log(10 * 10);
// console.log(10 / 10);
// console.log(10 % 10);

// // increment Operator
// let a = 10;
// console.log(a);
// a++;
// console.log(a);
// ++a;
// console.log(a);

// // decrement operator
// let b = 10;
// b--;
// console.log(b);
// --b;
// console.log(b);

// //comparison operator
// console.log(2 == 2);  // true
// console.log(2 != 2);  // false
// console.log(2 === 2); // true
// console.log(2 === '2'); // false
// console.log(2 !== 2); // false
// console.log(2 !== '2'); // true

// console.log(2 > 3)  // false
// console.log(2 < 3)  // true

// console.log(2 <= 3) // true
// console.log(2 >= 3) // false

// // logical operator
// // logical AND
// console.log(true && true); // true
// console.log(true && false); // false

// // logical OR
// console.log(true || false); // true

// // logical NOT
// console.log(!true); // false


// if else statement in

// let number = 45;

// if (number > 30) {
//   console.log("greater than 30");
// } else {
//   console.log("smaller than 30");
// }



// let number = 45;

// if (number > 30) {
//   console.log("greater than 30");
// } else if (number == 30){
//     console.log("equal to 30");
// } else {
//   console.log("smaller than 30");
// }


// for loop in JS

// const n = 5;

// for(let i=0; i<=n; i++){
//   console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//   console.log("Way2Future");
// }


// while loop

// let i = 1, n = 5;

// while (i <= n) {
//     console.log(i);
//     i++;
// }

// break & continue

// for (let i = 0; i <= 5; i++) {
//     if(i == 3){
//         break;
//     }
//     console.log(i);
// }


// for (let i = 0; i <= 5; i++) {
//     if(i == 3){
//         continue;
//     }
//     console.log(i)
// }


// switch case statement
// let a = 8;

// switch (a) {
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     case 3:
//         a = 'three';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(a);

// Functions in JS

// function greet() {
//     console.log("Hello there!");
// }
// // greet(); 




// const hello = () => console.log("Hello");
// hello();

// const add = (x, y) => x + y;
// console.log(add(3,4));

// Hello there!  

// function add(a, b) {
//     console.log(a + b);
// }

// add(5,9); // 14

// function rect(m, n) {
//     return m * n + 2;
// }

// console.log(rect(4, 6));
// 26

// const square = function (num) {
//     return num * num;
//   };
  
// console.log(square(4)); 
// 16


// objects 

// const person = { 
//     name: 'John', 
//     age: 20, 
// };

// console.log(person);
// console.log(person.name); 


// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// console.log(student.marks); 
// {science: 70, math: 75}

// console.log(student.marks.science); 
// 70

// global scope & local scope

// let a = "hello";

// function greet() {
//     // a = 3;
//     console.log(a)
// }

// console.log(a);


// greet();
// console.log(a);


//recursive function 

// function countDown(number) {
    
//     console.log(number);
//     const newNumber = number - 1;
//      // base case
//      if (newNumber > 0) {
//         countDown(newNumber);
//     }    
// }
//countDown(6);




// function doSomething(n) {
//     if(n === 0) {
//       console.log("TASK COMPLETED!")
//       return
//     }
//     console.log("I'm doing something.")
//     doSomething(n - 1)
//   }

// doSomething(3)

// let vs var 

// var num = 10;
// // console.log(num);

// var num = 20;
// console.log(num);

// num = 30;
// console.log(num);



// let numb = 40;
// console.log(numb);

// // let numb = 50;
// numb = 50;
// console.log(numb);



// js hoisting 


// var a = 5;
// console.log(a)
// var a ;
// console.log(a)
// a = 5;

// console.log(a)

// console.log(b);
// let b ;


// arrays in JavaScript

// let fruits = ["apple","banana","orange"];

// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits.length);

// let color = new Array("blue","red");

// console.log(color);

// let mixData = ["car", 24, true];

// console.log(mixData);

// Multidimensional Array

// let data1 = [[1,2,3], [1,3,4]];

// console.log(data1);
// console.log(data1[1]);

// let data2 = [1,2,3,[4,5]] 

// console.log(data2);

// let data3 = ["fruits",["🍎","🍌","🍉"]]

// console.log(data3);


// Strings JS


// const str1 = "elon musk"

// const str2 = `Tesla owner ${str1}`;

// console.log(str1)
// console.log(str2)

// console.log(str1[0])


// for in loop 

// let student = {
//     name : "elon musk",
//     rollNo : 12,
//     age : 18
// }

// for(let key in student){
//     console.log(`${key} : ${student[key]}`)
// }

// const str1 = "hello";

// for(let i in str1){
//     console.log(str1[i])
// }

// errors

// syntax errors
// runtime errors 

// eg of syntax errors

// console.log();

// const str1 = "apple";


// // runtime errors
// console.log(multiply());

// const plus = num1 + num2;



// try catch

// try {
//     const result = 10 / 0; 
//     console.log(result); 
//   } catch (error) {
//     console.log("error occurred:",error.message);
//   }


//   try {
//     const value = nonExistentVariable;
//   } catch (error) {
//     console.log("error occurred:",error.message);
//   }
  

// try catch finally 

const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("/ by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error("error : ", error.message);
  } finally {
    console.log("try catch block finished");
  }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
