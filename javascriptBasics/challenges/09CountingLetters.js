
// function countLarg(str){
//     let arr=str.split(' ')
//     let res=arr.reduce((acc,cv)=>{
        
//     },{
//         max:1,
//         word:''
//     })
// }



// let str='this is something for largest count'

// let res=countLarg(str)
// console.log(res);


function findWordWithHighestRepeatingLetter(inputString) {
    let words = inputString.split(/\s+/); // Split the input string into words
    let maxCount = 0;
    let resultWord = "";
  
    for (let word of words) {
      let charCount = {}; // Object to store the count of each character in the word
      let maxCharCount = 0;
  
      for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
  
        if (charCount[char] > maxCharCount) {
          maxCharCount = charCount[char];
        }
      }
      console.log(charCount);
  
      if (maxCharCount > maxCount) {
        maxCount = maxCharCount;
        resultWord = word;
      }
    }
  
    return resultWord;
  }
  
  let inputString = "this is something for largest count  india";
  let result = findWordWithHighestRepeatingLetter(inputString);
  console.log("Word with highest repeating letter:", result);
  