import React from 'react'

function States({ states }) {
    return (
        <div >
            {states.map((state) => {
                return(
                <div className="bg-warning">
                    <h1>{state.name}</h1>
                    <h4>Language: {state.language}</h4>
                    <h4>Populatin: {state.population}</h4>
                </div>
            )})}
        </div>
    )
}

export default States