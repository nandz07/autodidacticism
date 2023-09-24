import ChildComponent from "./ChildComponent"


function ParentComponent() {
    const greetParent=(childName)=>{
        alert(`hello parent ${childName}`)
    }
    return <ChildComponent greet={greetParent}></ChildComponent>
}

export default ParentComponent