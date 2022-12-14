function countSheep(arrayOfSheep) {
    // TODO May the force be with you
  
    //Create a variable to hold counter value
    let sheepAmount = 0;
    
    //loop number of sheep in array
    for( let i = 0; i < arrayOfSheep.length; i++) {
      //if sheep value is equal to true => add one
      if(arrayOfSheep[i] == true) {
          sheepAmount ++;
        }
     }
      //return amount of sheep
      return sheepAmount;
  };