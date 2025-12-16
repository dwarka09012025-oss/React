import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const ResultFormikTag = () => {
    const ini = { rollno: '', name: '', maths: '', science: '', english: '' }

    const [list, setList] = useState([])
    const formikRef = React.useRef()

    const handleSubmit = (values, { resetForm }) => {
        // console.log(values);

        if (list.some((item) => item.rollno === values.rollno)) {
            let copyData = [...list]
            const index = copyData.findIndex((item) => item.rollno === values.rollno)
            copyData[index] = values
            setList(copyData)
            resetForm()
            return
        }
        else {
            setList([...list, values])
        }
        // setList([...list, values])
        resetForm()
    }

    const editData = (edit, index) => {
        formikRef.current.setValues({
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
            return "Fail!!";
        }
        else {
            return total(i) / 3;
        }
    }

    const grade = (i) => {
        const grades = per(i);
        const gredeValues = Math.floor(grades)

        if (gredeValues >= 90 && gredeValues <= 100) {
            return "A+"
        } else if (gredeValues >= 80 && gredeValues < 90) {
            return "A"
        } else if (gredeValues >= 70 && gredeValues < 80) {
            return "B"
        } else if (gredeValues >= 60 && gredeValues < 70) {
            return "C"
        } else if (gredeValues >= 50 && gredeValues < 60) {
            return "D"
        } else {
            return "Fail!!"
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
                    <Formik initialValues={ini} onSubmit={handleSubmit} innerRef={formikRef}>
                        <Form>
                            <Field name="rollno" type="number" placeholder="Roll No :- "></Field><br /><br />
                            <Field name="name" type="text" placeholder="Full Name :- "></Field><br /><br />
                            <Field name="maths" type="number" placeholder="Maths :- "></Field><br /><br />
                            <Field name="science" type="number" placeholder="Science :- "></Field><br /><br />
                            <Field name="english" type="number" placeholder="English :- "></Field><br /><br />
                            <button type="submit" className='Button'>Submit</button>
                        </Form>
                    </Formik>

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

export default ResultFormikTag