//Reverse the characters in a string

// console.log(reverseAString("987654321"));

// function reverseAString(passedString){
//   return passedString.split("").reverse().map(x => x.toString()).join("");
// }

//Concatenate everything in an array to a single string

//console.log(arrayAsString(["hello", 1, 99.99, true, false, null]));



function randomArrayGenerator(length) {
  let returningArray = [];

  for(let i=0; i<length; i++){
    returningArray.push(Math.floor(Math.random()*11));
  }

  //check
  return returningArray.sort((a, b) => a-b);
}


  //dot modelmodel
  function arrayAsString(passedArray, targetSum){  
    let returningArray = [];

     let i=0;
     let j=passedArray.length - 1

     while(i < j){
       if(passedArray[i] + passedArray[j] == targetSum){
         //I'm pushing the indexes, not the actual stuff
        returningArray.push(passedArray[i]);
        returningArray.push(passedArray[j]);
        i++;
       } else if (passedArray[i] + passedArray[j] < targetSum) {
         i++;
       } else {
         //j++;
         j--;
       }
     }

    //misdirection, look up at the lack of a breaking caluse up there
    //return returningArray.length > 0 ? returningArray: "None found";
    // return (returningArray.length>0 ? returningArray : "None found");

    if(returningArray.length > 0){
      return returningArray;
    } else {
      return "nothing found"
    }
  }

let generatedArray = [ 0, 0, 1, 5, 5, 5, 6, 8, 8, 10, 2, 6];
console.log(generatedArray);
console.log(arrayAsString(generatedArray, 10));


