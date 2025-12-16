import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
            <Container fluid className='py-4'>
                <div className='Student'>
                    <Row className='mb-4'>
                        <Col lg={6} md={8} sm={12} className='mx-auto'>
                            <div className='form-card'>
                                <h3 className='mb-4 text-center'>Student Information</h3>
                                <form onSubmit={f.handleSubmit}>
                                    <div className='mb-3'>
                                        <input type="number" name="rollno" className='form-control' placeholder='Roll no. :- ' onChange={f.handleChange} value={f.values.rollno} />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="text" name="name" className='form-control' placeholder='Full Name :- ' onChange={f.handleChange} value={f.values.name} />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="number" name="maths" className='form-control' placeholder='Maths Marks :- ' onChange={f.handleChange} value={f.values.maths} />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="number" name="science" className='form-control' placeholder='Science Marks :- ' onChange={f.handleChange} value={f.values.science} />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="number" name="english" className='form-control' placeholder='English Marks :- ' onChange={f.handleChange} value={f.values.english} />
                                    </div>
                                    <button type="submit" className='btn btn-primary w-100'>Submit</button>
                                </form>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <div className='Result'>
                                <h3 className='mb-4 text-center'>Results</h3>
                                <div className='table-responsive'>
                                    <table className='table table-bordered table-hover'>
                                        <thead className='table-dark'>
                                            <tr>
                                                <th colSpan={12} className='text-center'>RESULT</th>
                                            </tr>
                                            <tr>
                                                <th>Roll no.</th>
                                                <th>Student Name</th>
                                                <th>Maths</th>
                                                <th>Science</th>
                                                <th>English</th>
                                                <th>Total</th>
                                                <th>Percentage</th>
                                                <th>Grade</th>
                                                <th>Min</th>
                                                <th>Max</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                list.map((i, index) => (
                                                    <tr key={index}>
                                                        <td>{i.rollno}</td>
                                                        <td>{i.name}</td>
                                                        <td>{i.maths}</td>
                                                        <td>{i.science}</td>
                                                        <td>{i.english}</td>
                                                        <td><strong>{total(i)}</strong></td>
                                                        <td>{per(i)}%</td>
                                                        <td><span className='badge bg-info'>{grade(i)}</span></td>
                                                        <td>{min(i)}</td>
                                                        <td>{max(i)}</td>
                                                        <td>
                                                            <button className='btn btn-sm btn-warning' onClick={() => editData(i, index)}>Edit</button>
                                                        </td>
                                                        <td>
                                                            <button className='btn btn-sm btn-danger' onClick={() => deleteData(index)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ResultFormik