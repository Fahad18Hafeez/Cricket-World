// let boxes = document.querySelectorAll(".box");
// let resetButton = document.getElementById("reset");
// let message = document.getElementById("message");
// let currentPlayer = "X";
// let gameOver = false;
// let moveCount = 0;
// let winningPatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];
// boxes.forEach(function(box){
//     box.addEventListener("click", function(){
//         if(gameOver){
//             return;
//         }
//         if(box .innerText != ""){
//             return;
//         }
//         box.innerText = currentPlayer;
//         moveCount++;
//         checkWinner();
//         if(!gameOver && moveCount == 9){
//             message.innerText = "It's a Draw!";
//             gameOver = true;
//             return;
//         }
//         if(gameOver){
//             return;
//         }
//         if(currentPlayer == "X"){
//             currentPlayer = "O";
//         }else{
//             currentPlayer = "X";
//         }
//     });
// });
// function checkWinner(){
//     winningPatterns.forEach(function(pattern){
//         let first = boxes[pattern[0]].innerText;
//         let second = boxes[pattern[1]].innerText;
//         let third = boxes[pattern[2]].innerText;
//         if(first != "" && first == second && second == third){
//             message.innerText = first + " Wins!";
//             gameOver = true;
//             boxes[pattern[0]].classList.add("win");
//             boxes[pattern[1]].classList.add("win");
//             boxes[pattern[2]].classList.add("win");
//         }
//     });
// }
// resetButton.addEventListener("click", function(){
//     boxes.forEach(function(box){
//         box.innerText = "";
//         box.classList.remove("win");
//     });
//     currentPlayer = "X";
//     gameOver = false;
//     moveCount = 0;
//     message.innerText = "";
// });
// let number=[1,2,3,4];
// let newNumber=number.map(function(num){
//     return num*2;
// });
// console.log(newNumber);
// let number=[20,25,30,35];
// let result=number.filter(function(num){
//     return num>=30;
// })
// console.log(result);
// let number=[20,25,30,35];
// let result=number.find(function(num){
//     return num>=30;
// })
// console.log(result);
// let price=[100,200,300];
// let total=price.reduce(function(total,sum){
//     return total+sum;
// },0);
// console.log(total);
// let fruits=["apple","mango","orange"];
// let [first,second,third]=fruits;
// console.log(third);
// let students={
//     name:"Fahad Hafeez",
//     rank :"2nd year",
//     age:19,
// };
// let{name,age,rank}=students;
// console.log(rank);
// let box=document.getElementById("name");
// let button=document.getElementById("save button");
// let result=document.getElementById("result");
// button.addEventListener("click", function(){
//     let student={
//         name:box.value};
//     // let data=JSON.stringify(student);
//     // localStorage.setItem("student",data);
//     // console.log("data saved");
//     let data = localStorage.getItem("student");
//     result.innerText = student.name;
// })
localStorage.setItem("name", "Fahad");
localStorage.setItem("city","Multan");
localStorage.setItem("age",19);
// localStorage.removeItem("name");
// localStorage.clear();