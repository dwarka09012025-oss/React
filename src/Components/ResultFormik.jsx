import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const ResultFormik = () => {

    const ini = { rollno: '', name: '', maths: '', science: '', english: '' }

    const [list, setList] = useState([])

    const f = useFormik({
        initialValues: ini,
        onSubmit: (values) => {
            // console.log(values);

            if (list.some((item) => item.rollno === values.rollno)) {
                let copyData = [...list]
                const index = copyData.findIndex((item) => item.rollno === values.rollno)
                copyData[index] = values
                setList(copyData)
            }
            else {
                setList([...list, values])
            }
            // setList([...list, values])

            f.handleReset()
        }
    })

    const editData = (edit) => {
        f.setValues({
            rollno: edit.rollno,
            name: edit.name,
            maths: edit.maths,
            science: edit.science,
            english: edit.english
        })
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
            return "--";
        }
        else {
            return total(i) / 3;
        }
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

    const min = (i) => {
        return Math.min(Number(i.maths), Number(i.english), Number(i.science))
    }
    const max = (i) => {
        return Math.max(Number(i.maths), Number(i.english), Number(i.science))
    }

    return (
        <>
            <Container>
                <div className='Student'>
                    <form action="" onSubmit={f.handleSubmit}>
                        <input type="number" name="rollno" placeholder='Roll no. :- ' onChange={f.handleChange} value={f.values.rollno} /> <br /><br />
                        <input type="text" name="name" placeholder='Full Name :- ' onChange={f.handleChange} value={f.values.name} /> <br /><br />
                        <input type="number" name="maths" placeholder='Maths Marks :- ' onChange={f.handleChange} value={f.values.maths} /> <br /><br />
                        <input type="number" name="science" placeholder='Science Marks :- ' onChange={f.handleChange} value={f.values.science} /> <br /><br />
                        <input type="number" name="english" placeholder='English Marks :- ' onChange={f.handleChange} value={f.values.english} /> <br /><br />
                        <button type="submit" className='Button'>Submit</button>
                    </form>

                    <div className='Result'>
                        <table border={1}>
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
                                        <tr>
                                            <td>{i.rollno}</td>
                                            <td>{i.name}</td>
                                            <td>{i.maths}</td>
                                            <td>{i.science}</td>
                                            <td>{i.english}</td>
                                            <td>{total(i)}</td>
                                            <td>{per(i)}%</td>
                                            <td>{grade(i)}</td>
                                            <td>{min(i)}</td>
                                            <td>{max(i)}</td>
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

export default ResultFormik