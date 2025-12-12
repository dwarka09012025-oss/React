/* eslint-disable no-unused-vars */
import { useState } from "react"

const StateExample = () => {

    const [text, setText] = useState('Hello')

    const [no, setNo] = useState(0)

    var incre = () => {
        setNo(no + 100)
    }

    const increByValue = (a) => {
        setNo(no + a)
    }

    return (
        <div>
            <h1>{text}</h1>
            <h2>{no}</h2>

            <button onClick={() => setText('State')}>Click me</button><br />
            <button onClick={() => setNo(no + 1)}>+1</button><br />
            <button onClick={incre}>+100</button><br />
            <button onClick={() => increByValue(10000)}>+10000</button><br />

        </div>
    )
}

export default StateExample