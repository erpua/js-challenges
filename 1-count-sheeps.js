function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
  
    //Create an object to hold counter value
    let sheepsAmount = 0;
    
    //loop number of sheep in array
    for( let i = 0; i < arrayOfSheep.length; i++) {
      //if sheeps' value is equal to true => add one
      if(arrayOfSheep[i] == true) {
          sheepsAmount ++;
        }
     }
      //return amount of sheeps
      return sheepsAmount;
  }