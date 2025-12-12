import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Studentresult = () => {

    const [rollno, setRollno] = useState('')
    const [name, setName] = useState('')
    const [maths, setMaths] = useState('')
    const [english, setEnglish] = useState('')
    const [science, setScience] = useState('')
    const [list, setList] = useState([])

    const handleSubmit = () => {

        const object = { rollno, name, maths, english, science }

        setList([...list, object])

        setRollno('')
        setName('')
        setMaths('')
        setEnglish('')
        setScience('')
    }

    return (
        <>
            <Container>
                <div className='Student'>
                    <input type="number" placeholder='Roll no. :- ' min={1} max={10000} value={rollno} onChange={(e) => setRollno(e.target.value)} />
                    <br /><br />
                    <input type="text" placeholder='Full Name :- ' value={name} onChange={(e) => setName(e.target.value)} />
                    <br /><br />
                    <input type="number" placeholder='Maths Marks :- ' min={1} max={100} value={maths} onChange={(e) => setMaths(e.target.value)} />
                    <br /><br />
                    <input type="number" placeholder='English Marks :- ' min={1} max={100} value={english} onChange={(e) => setEnglish(e.target.value)} />
                    <br /><br />
                    <input type="number" placeholder='Science Marks :- ' min={1} max={100} value={science} onChange={(e) => setScience(e.target.value)} />
                    <br /><br />
                    <button onClick={handleSubmit}>Submit</button>

                    <div className='Result'>
                        <table>
                            <thead>
                                <tr className='TR'>
                                    <th colSpan={11}>RESULT</th>
                                </tr>
                                <tr>
                                    <th rowSpan={2}>Roll no.</th>
                                    <th rowSpan={2}>Student Name</th>
                                    <th colSpan={3}>Subject</th>
                                    <th rowSpan={2}>Total</th>
                                    <th rowSpan={2}>Percentage</th>
                                    <th rowSpan={2}>Grade</th>
                                    <th rowSpan={2}>Minimum</th>
                                    <th rowSpan={2}>Maximum</th>
                                    <th rowSpan={2}>Average</th>
                                </tr>
                                <tr>
                                    {/* <th>Roll No.</th>
                                    <th>Name</th> */}
                                    <th>Maths</th>
                                    <th>English</th>
                                    <th>Science</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((i, index) => (
                                        <tr key={index}>
                                            <th>{i.rollno}</th>
                                            <th>{i.name}</th>
                                            <th>{i.maths}</th>
                                            <th>{i.english}</th>
                                            <th>{i.science}</th>
                                            <th>
                                                {Number(i.maths) + Number(i.english) + Number(i.science)}
                                            </th>
                                            <th>
                                                {(Number(i.maths) + Number(i.english) + Number(i.science)) / 3}
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Studentresult