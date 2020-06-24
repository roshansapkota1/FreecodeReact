import React from 'react'



const GreetingsByTime = ( ) => {
    let greeting = ''
    let time = new Date(2017, 6, 4, 2)
    let hours = time.getHours();

    const style = {
        fontSize: 38
    
    }
    console.log(style);
    
    

    
    
    if ( hours > 20){
        time = 'Good Night'
        style.color = 'black'
    }
    else if ( hours >= 12  ){
        time = "Good Afternoon"
        style.color = 'blue'
    }
    else{
        time = 'Good Morning'
        style.color = 'green'
    }

    return (
        <h3 style={style}>{time}</h3>
    )
        
}

export default GreetingsByTime;