import React, { PureComponent } from 'react'

export class List extends PureComponent {
    state={
        score:5,
        date:[
            {
                id:1,
                name:'nandakumar',
                age:25
            },
            {
                id:2,
                name:'vishnu',
                age:24
            },
            {
                id:3,
                name:'faiz',
                age:23
            },
        ]
    }
// componentDidMount(){
//     alert('')
// }
// componentWillUnmount(){
//     console.log('hai')
// }

incrementScore=()=>{   
    this.setState({
        score:10    
    })
}

  render() {
    console.log(this.state.score)
    return (
      <div>
        <ul>
            {/* {this.state.date.map((value,index)=>{
                return <li>{value.id}-{value.name}-{value.age}</li>
            })} */}
            {this.state.date.map((value,index)=>(
              

                <li key={value.id}>
                    {value.id}-{value.name}-{value.age}
                    </li>
                
                
            ))}
        </ul>
        <button onClick={this.incrementScore}>Score Click</button>
      </div>
    )
  }
}

export default List