const fs = require('fs');
const listJsonPath = '../lists_1.json';

 
  function listInformation(boardID){
    let lists;
    fs.readFile(listJsonPath,"utf8",(error, data)=>{
        if(error){
           console.log(error)
            return ;
        }
         else{
            console.log("successfully get lists");
            //readJson(data);
            lists = data;
         }
   });
   setTimeout(()=>{
    getParticularIdInfo(lists,boardID)
   
  },2000)
   
   }
   function getParticularIdInfo(lists, boardID){
    try{  const list = JSON.parse(lists)
      const ans = Object.entries(list)
       
       //console.log(listID);
      
      const particularlistID=ans.map((board)=>{
        let obj ={}
        obj[board[0]]=board[1]
        return obj ;
      }). filter((list)=> list[boardID]).map((list)=>{
        return  list[boardID];
      })
      //
      console.log(particularlistID);
   } catch(error){
       console.log("Error in setTimeout callback:", error);
   }
   };
  
 module.exports = listInformation;
/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

