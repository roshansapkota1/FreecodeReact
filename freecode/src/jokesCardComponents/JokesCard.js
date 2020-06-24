import React from 'react'
import './jokesCard.css'

const JokesCard = (props) => {
    console.log(props)
    return (
        <div className="jokes-card">
            <h3 style={{display: props.question ? 'block' : 'none'}}>Question : {props.question}</h3>
            <p>Answer :{props.punchline}</p>
        </div>
    )
}

export default JokesCard;