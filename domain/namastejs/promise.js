const API_URL='https://api.github.com/users/nandz07'

async function handlePromise(){
    try {
        const data= await fetch(API_URL)
    const updata=await data.json()
    console.log(updata);
    } catch (error) {
        console.error(error.message);
    }
    
}
let a=handlePromise()
console.log(a);