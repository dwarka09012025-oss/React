import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const FormikTag = () => {

    const ini = { name: '', surname: '' }

    const [list, setList] = useState([])

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        setList([...list, values])
        resetForm()
    }

    return (
        <>
            <Formik initialValues={ini} onSubmit={handleSubmit}>
                <Form>
                    <Field name="name"></Field><br /><br />
                    <Field name="surname"></Field><br /><br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <table border={2}>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                        </tr>
                    ))
                }
            </table >
        </>
    )
}

export default FormikTag