let lengthOfLongestSubstring = function(s) {
    let st=''
    let len=0
    for(let i=0;i<s.length;i++){
        if(st.includes(s[i])){
            while (st.includes(s[i])) {
                st.slice(1)
            }
        }
        st+=s[i]
        if(st.length>len){
            len=st.length
        }
    }
};
let a=" "
let res=lengthOfLongestSubstring(a)
console.log(res);