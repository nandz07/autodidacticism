var plusOne = function(digits) {
    if(digits[digits.length-1]==9){
            digits.length++
        digits[digits.length-1]=0
        digits[digits.length-2]=1
    }else{
        digits[digits.length-1]+=1
    }
    return digits
};

let res=plusOne([9])
console.log(res);