var dayOfYear = function(date) {
    let a=date.split('-');
    if(a[1]==1){
       return a[2]
    }
    else if(a[1]==2){
       return 31+parseInt(a[2])
    }else{
       let t=Math.round(parseInt(a[2])/2)
         let res=t*31
       if(a[0]%4==0){
         let f=res-(parseInt(a[2])%2)+1
         return f
       }else{
          let f=res-(parseInt(a[2])%2)+2
         return f
       }
    }
    if(a[1]<=2){
       // if()
           return 31+parseInt(a[2])
        }else{
          
        }
    
 };