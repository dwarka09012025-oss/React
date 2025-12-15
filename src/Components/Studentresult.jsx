import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Studentresult = () => {

    const [rollno, setRollno] = useState('')
    const [name, setName] = useState('')
    const [maths, setMaths] = useState('')
    const [english, setEnglish] = useState('')
    const [science, setScience] = useState('')
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)

    const handleSubmit = () => {

        const object = { rollno, name, maths, english, science }

        if (editId != null) {
            let copyData = [...list]
            copyData[editId] = object
            setList(copyData)
            setEditId(null)
        }
        else {
            setList([...list, object])
        }

        // setList([...list, object])

        setRollno('')
        setName('')
        setMaths('')
        setEnglish('')
        setScience('')
    }

    const editData = (edit, index) => {
        setRollno(edit.rollno)
        setName(edit.name)
        setMaths(edit.maths)
        setEnglish(edit.english)
        setScience(edit.science)
        setEditId(index)
    }

    const deleteData = (index) => {
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
    }

    const total = (i) => {
        return Number(i.maths) + Number(i.english) + Number(i.science)
    }

    const per = (i) => {
        // return total(i) / 3
        if (Number(i.maths) <= 35 || Number(i.english) <= 35 || Number(i.science) <= 35) {
            return "0";
        }
        else {
            return total(i) / 3;
        }
    }

    const min = (i) => {
        return (Math.min(Number(i.maths), Number(i.english), Number(i.science)))
    }

    const max = (i) => {
        return (Math.max(Number(i.maths), Number(i.english), Number(i.science)))
    }

    const grade = (i) => {
        const grades = per(i);

        const gredeValues = Math.floor(grades)

        if (gredeValues >= 90 && gredeValues <= 100) {
            return 'A+';
        }
        else if (gredeValues >= 80 && gredeValues < 90) {
            return 'A';
        }
        else if (gredeValues >= 70 && gredeValues < 80) {
            return 'B';
        }
        else if (gredeValues >= 60 && gredeValues < 70) {
            return 'C';
        }
        else if (gredeValues >= 50 && gredeValues < 60) {
            return 'D';
        }
        else if (gredeValues >= 35 && gredeValues < 50) {
            return 'E'
        }
        else {
            return 'Fail!!';
        }
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
                    <button className='Button' onClick={handleSubmit}>Submit</button>

                    <div className='Result'>
                        <table>
                            <thead>
                                <tr className='TR'>
                                    <th colSpan={12}>RESULT</th>
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
                                    <th rowSpan={2}>Edit</th>
                                    <th rowSpan={2}>Delate</th>
                                </tr>
                                <tr>
                                    <th>Maths</th>
                                    <th>English</th>
                                    <th>Science</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((i, index) => (
                                        <tr key={index}>
                                            <td>{i.rollno}</td>
                                            <td>{i.name}</td>
                                            <td>{i.maths}</td>
                                            <td>{i.english}</td>
                                            <td>{i.science}</td>
                                            <td>
                                                {total(i)}
                                            </td>
                                            <td>
                                                {per(i)}%
                                            </td>
                                            <td>
                                                {grade(i)}
                                            </td>
                                            <td>
                                                {min(i)}
                                            </td>
                                            <td>
                                                {max(i)}
                                            </td>
                                            <td>
                                                <button className='Button' onClick={() => editData(i, index)}>Edit</button>
                                            </td>
                                            <td>
                                                <button className='Button' onClick={() => deleteData(index)}>Delete</button>
                                            </td>
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