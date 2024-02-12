/* 
	Problem 4: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

const fs = require('fs');
const  boardJsonPath ='./boards_1.json';
const  listJsonPath ='./lists_1.json';
const cardsJsonPath ='./cards_1.json';
const boardInformation= require('./call_back1.cjs');
let board ="Thanos";
let card = "Mind"
function getInformationfromBoard(board){
     let boards;
     fs.readFile(boardJsonPath,"utf8",(error, data)=>{
        if( error){
            console.log(error);
        }
         else{
            boards = data;
         }
         setTimeout( function callback(){
            getThanoInfo( boards,board);
            },2000);
     })
}
 function  getThanoInfo( boards,boardSt){
    try{  const board = JSON.parse(boards)
        //console.log(board);
        // console.log(boardSt);
        const particularboardID=board.filter((board)=> board.name===boardSt)
        boardInformation(particularboardID[0].id)
        // Console.log
     } catch(error){
         console.log("Error in setTimeout callback:", error);
     }
 }
 getInformationfromBoard(board);