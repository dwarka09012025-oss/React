import React, { useState } from 'react'
import { useFormik } from 'formik'

const Formik = () => {

    const ini = { name: '', surname: '' }

    const [list, setList] = useState([])

    const f = useFormik({
        initialValues: ini,
        onSubmit: (values) => {
            console.log(values);

            setList([...list, values])
            f.handleReset()
        }
    })

    return (
        <>
            <form action="" onSubmit={f.handleSubmit}>
                <input type="text" name="name" onChange={f.handleChange} value={f.values.name} /> <br /><br />
                <input type="text" name="surname" onChange={f.handleChange} value={f.values.surname} /> <br /><br />
                <button type="submit">Submit</button>
            </form>

            <table border={1}>
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
            </table>

        </>
    )
}

export default Formik