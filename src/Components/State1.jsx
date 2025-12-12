/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const State1 = () => {

    const [text, setText] = useState('---')

    return (
        <div className='w-100'>
            <div className='w-1140'>
                <div className="flex">
                    <div className='Div-1'>
                        <h1>{text}</h1>
                    </div>
                    <div className='Div-2'>
                        <button onClick={() => setText('Good Morning')}>Good Morning</button>
                        <button onClick={() => setText('Good Afternoon')}>Good Afternoon</button>
                        <button onClick={() => setText('Good Evening')}>Good Evening</button>
                        <button onClick={() => setText('Good Night')}>Good Night</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default State1
