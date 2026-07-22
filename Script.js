// console.log("My name is Fahad Hafeez");
// console.log("I am learning Java Script");
// console.log("Welcome to coding");
// console.log("HTML+CSS Completed");
// console.log("First Day of java script learning");
// let name = "Fahad Hafeez";
// console.log(name);
// // let name = "Muhammad Fahad Hafeez";
// // let age = 19;
// // let country = "Pakistan";
// // let isStudent = true;
// // let hobby = "Coding";

// // console.log(typeof name);
// // console.log(typeof age);
// // console.log(typeof country);
// // console.log(typeof isStudent);
// // console.log(typeof hobby);
// let a = 15;
// let b = 4;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** 2);
// alert("Welcome to JavaScript!");
// // let name = prompt("Enter your Name");
// // console.log(name);
// // let name=prompt("your name");
// // alert("welcome"+name);
// let age = Number(prompt("Enter Your Age"));
// console.log("Age: " + age);
// // let a=5;
// // console.log(a!=5);
// let password="1234";
// console.log(password==="1234"
// )
// console.log(!true);
// console.log(!false);
// // let age=15;
// // if(age>=28){
// // console.log("you can vote");}
// // else if(age<=28)
// // {console.log("You can it");
// //    }
// //    else{
// //     console.log("wrong");
// //    }
// let day=Number(prompt("enter day number"));
// switch(day){
//    case 1:
//       console.log("Monday");
//       break;
//       case 2:
//          console.log("tuesday");
//          break;
//          case 3:
//             console.log("Wednesday");
//             break;
// default:
// console.log("invalid day");}
// for(let i=1; i<=5; i++){
//    console.log(i);
// }
// let i=1
// while(i<=5)
// {console.log(i);
// i++;
// }
// // let i=10;
// // while(i>=1){
// //     console.log(i);
// //     i--;
// // }
// // let i=1;
// // do{
// //     console.log(i);
// //     i++;
// // }
// while(i<=5);
// function greet(){
//     console.log("welcome");
// }
// greet();
// greet();
// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 6);
// console.log(result);
// function greet(a,b){
//     console.log(a+b);
// }
// greet(3,4);
// greet(5,6);
// greet(4,8);
// let x = 100;

// function show() {
//     console.log(x);
// }

// show();
// function test() {
//     let y = 50;
//     console.log(y);
// }

// test();

// console.log(y);
// const subtract=(a, b) =>
//      a - b;
// console.log(subtract(20, 5));
// let fruits=["apple","bnana","mango","Orange"];
// console.log(fruits[0]);
// console.log(fruits[3]);
// let subjects=["English","Math","Physics","computer"];
// console.log(subjects[0]);
// console.log(subjects[2]);
// let colors=["Red","Green","Blue"];
// colors[2]="Black"
// console.log(colors);
// // let subjects=["English","Math","Physics","Computer","urdu"];
// // console.log(subjects.length);
// let numbers=[10,20,30];
// numbers.push(40);
// console.log(numbers);
// let colors=["Red","Green","Blue","Black"];
// colors.pop();
// console.log(colors);
// let numbers=[20,30,40,];
// numbers.unshift(10);
// console.log(numbers);
// let colors=["red","Green","blue","black"];
// for(let i=0;i<colors.length;i++){
//     console.log(colors[i]);     
// }
// let car={
//    brand:"toyota",
//     color:"white",
//     model:2024
// };
// delete car.model;
// console.log(car);
// let student={
//     name:"Fahad",
//     city:"Multan",
//     age:19
// };
// delete student.age;
// console.log(student);
// let mobile={
//     brand:"samsung",
//     model:"A55"
// };
// mobile.color="black";
// console.log(mobile);
let input = document.getElementById("name");
let butt0n = document.getElementById("btn");

butten.addEventListener("click", function(){
    console.log(input.value);
});
let heading= document.getElementById("welcome");
heading.style.fontSize="50px";
heading.style.color="black";
heading.style.textAlign="center";
let school=document.getElementById("school");
let button = document.getElementById("btn");

// button.addEventListener("click", function () {
// console.log("Hello Fahad");
// });let button = document.getElementById("btn");

button.addEventListener("click", function(event){
    console.log(event);
});
school.style.color="white";
school.style.fontSize="40px";
school.style.backgroundColor="green";
school.style.textAlign="center";