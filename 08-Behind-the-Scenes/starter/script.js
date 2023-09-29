// 'use strict';

// // function calcAge(birthYear) {
// //   const age = 2037 - birthYear;

// //   function printAge() {
// //     let output = `${firstName} You are ${age}, born in ${birthYear}`;
// //     console.log(output);

// //     if (birthYear >= 981 && birthYear <= 1996) {
// //       var millenial = true;
// //       const firstName = 'Steven';
// //       const str = `Oh, you are a milenial, ${firstName}`;
// //       console.log(str);

// //       function add(a, b) {
// //         return a + b;
// //       }
// //       output = 'NEW OUTPUT';
// //     }

// //     // console.log(add(2, 3));

// //     // console.log(str);
// //     console.log(millenial);
// //     console.log(output);
// //   }
// //   printAge();
// //   return age;
// // }

// // const firstName = 'Jonas';
// // calcAge(1991);

// // console.log(me);
// // // console.log(job);
// // console.log(year);

// // var me = 'Jonas'; //hoisted nut with value of undefined
// // let job = 'teacher'; //not hoisted
// // const year = 1991; //not hoisted

// //Function
// // console.log(addDecl(2, 3));
// // // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// // function addDecl(a, b) {
// //   //hoisted
// //   return a + b;
// // }

// // var addExpr = function (a, b) {
// //   return a + b;
// // };

// // var addArrow = (a, b) => {
// //   a + b;
// // };

// // console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; //borrow the fuction
// console.log(matilda);
// matilda.calcAge();

// const f = jonas.calcAge;
// console.log(f);
// f();

// var firstName = 'Matilda';

// const jonas = {
//         firstName: 'Jonas',
//         year: 1991,
//         calcAge: function() {
//             console.log(this);
//             console.log(2037 - this.year);

//             const isMilenial = function() {
//                 console.log(this.year >= 1981 && this.year <= 1996)
//                 isMilenial();
//             };
//         }
//     },
//     greet: () => console.log(`Hey ${this.firstName}`),
//     // greet: function () {
//     //   console.log(`Hey ${this.firstName}`);
//     // },
// };

// jonas.greet();
// jonas.calcAge();
// ?How to copy obkect

const jesica = {
  firstName: 'Jesica',
  lastName: 'Wiliwams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const JesicaCopy = Object.assign({}, jesica); //shallow copy
