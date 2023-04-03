import React, { useReducer } from 'react'

const reducer = (initial, action) => {
    if (action.type === "increase") {
        initial = initial + 1;
    }
    if (initial > 0 && action.type === "decrease") {
        initial = initial - 1;
    }
    return initial;
}

const PlusMinus = () => {
    // const[increase,setincrease]=useState(0)
    const current = 0
    const [initial, dispatch] = useReducer(reducer, current)
    // // const[decrese,setdecrese]=useState(null)
    // const Increase=()=>{
    //     setincrease(increase+1)
    // }

    // const Decrease=()=>{
    //     setincrease(increase-1)
    // }


    return (
        <>
            <div className="center_div">
                <p>{initial}</p>
                <div className='button2' onClick={() => dispatch({ type: "decrease" })} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
                </div>
                <div className='button2' onClick={() => dispatch({ type: "increase" })} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
                </div>
            </div>
        </>
    )
}

export default PlusMinus
