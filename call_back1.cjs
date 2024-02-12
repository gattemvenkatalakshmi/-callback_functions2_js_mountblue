const fs = require('fs');
const boardJsonPath = '../boards_1.json';

//let ans=[] ;
  function boardInformation(boardID){
    let boards;
     
    fs.readFile(boardJsonPath,"utf8",(error, data)=>{
        if(error){
           console.log(error)
           
        }
         else{
            console.log("successfully get Boards");
            //readJson(data);
           
            boards = data;
            

           
         }
   });
    //getParticularIdInfo(boards, boardID);
    setTimeout( function callback(){
      return  getParticularIdInfo(boards, boardID)
  },4000);
   
  }
  
  
  function  getParticularIdInfo(boards,boardID){
    try{  const board = JSON.parse(boards)
     // console.log(board);
       //console.log(boardID);
      const particularboardID=board.filter((board)=> board.id==boardID)
      return (particularboardID);
   } catch(error){
       console.log("Error in setTimeout callback:", error);
   }
   }
 module.exports=boardInformation;









/* 
	Problem 1: Write a function that will 
    return a particular board's information based on 
    the boardID that is passed from the given list of 
    boards in boards.json and then pass control back to 
    the code that called it by using a callback function.
*/




