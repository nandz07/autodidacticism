//let menu=document.getElementById("menu").style.display="none"



let newFeature=document.getElementById("newFeature")

console.log(newFeature)
newFeature.addEventListener("mouseover",()=>{
    let menu=document.getElementById("menu")
    menu.style.display="block"
})
newFeature.addEventListener("mouseout",()=>{
    let menu=document.getElementById("menu")
    menu.style.display="none"
})

