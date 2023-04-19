function checkPalindrome(str){
    // console.log(str.length)
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[str.length-1-i]){
            return `${str} not a palindrome`
        }
    }
    return `${str} is a palindrome`
}

var a=checkPalindrome('malayalam')
console.log(a);

var b=checkPalindrome('vegetable')
console.log(b);

