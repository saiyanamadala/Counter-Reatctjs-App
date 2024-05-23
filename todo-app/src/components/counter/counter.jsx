import { useState } from 'react'
import './counter.css'
import PropTypes from 'prop-types'

export default function CounterButton(){
    const [cnt,incCount]=useState(0);
    function incrementCounter(by){
        incCount(cnt+by)
        console.log(cnt)
    }

    function decrementCounter(by){
        incCount(cnt-by)
    }

    function reset(){
        incCount(0)
    }
    
    return(
        <div>
            <span className="Counter">{cnt}</span>
            <Counter by={1} incm={incrementCounter} decm={decrementCounter}/>
            <Counter by={2} incm={incrementCounter} decm={decrementCounter}/>
            <Counter by={5} incm={incrementCounter} decm={decrementCounter}/>
            <button className="resetButton" onClick={reset}>reset</button>
        </div>
    )
}

function Counter({by,incm,decm}){

    

    // console.log(by)

    // function incrementCounter(){
    //     incm(by)
    // }

    // function decrementCounter(){
    //     decm(by)
    // }

    return(
        <div className="Counter">
           
            <div>
            <button className="counterButton" onClick={()=>incm(by)}>+{by}</button>
            <button className='minusButton' onClick={()=>decm(by)}>-{by}</button>
            </div>
        </div>
    )
}

Counter.propTypes={
    by: PropTypes.number
}

