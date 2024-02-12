const fs = require('fs');
const cardJsonPath = './cards_1.json';


  function cardInformation(listId){
    let cards;
    fs.readFile(cardJsonPath,"utf8",(error, data)=>{
        if(error){
           console.log(error)
          
        }
         else{
            console.log("successfully get cards");
            //readJson(data);
            cards = data;
         }
   });
   setTimeout(()=>{
       // console.log(cards);
        getParticularIdInfo(cards,listId)
     },2000);
      
   
  }
   function getParticularIdInfo(cards,listId){
     try{ cardArr= Object.entries(JSON.parse(cards));
      const  card= cardArr.map((list)=>{
           let listObj ={};
            listObj[list[0]]=list[1];
             return listObj;
      }).filter((list)=>{
         return list[listId];
      }).map((list)=>list[listId])
      console.log(card);
   }
       catch(error){
          console.log(error);
       }
   }
  
 module.exports=cardInformation;
/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/