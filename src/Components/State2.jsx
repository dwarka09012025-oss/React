import React, { useState } from 'react'

const State2 = () => {

    const [no, setNo] = useState(0)

    const increByvalue = (a) => {
        setNo(no + a)
    }

    const decreByvalue = (a) => {
        setNo(no - a)
    }

    return (
        <div className='w-100'>
            <div className='w-1140'>
                <div className="flex">
                    <div className='Div-1'>
                        <h1>{no}</h1>
                    </div>
                    <div className='Div-2'>
                        <button onClick={() => increByvalue(1)}>+1</button>
                        <button onClick={() => decreByvalue(1)}>-1</button>
                        <button onClick={() => increByvalue(5)}>+5</button>
                        <button onClick={() => decreByvalue(5)}>-5</button>
                        <button onClick={() => increByvalue(10)}>+10</button>
                        <button onClick={() => decreByvalue(10)}>-10</button>
                        <button onClick={() => increByvalue(100)}>+100</button>
                        <button onClick={() => decreByvalue(100)}>-100</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default State2
