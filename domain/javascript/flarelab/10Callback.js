setTimeout(() => {
    console.log('timer');
}, 5000);

function x(y){
    console.log('x called');
    y()
}
x(function (){
    console.log('callback called');
})
