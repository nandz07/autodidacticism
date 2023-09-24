function Greet(props){

    return(
        <>
         <h1>Hello {props.name} are you {props.age} year old?</h1>
         {props.children}
         </>
    )
}
export default Greet