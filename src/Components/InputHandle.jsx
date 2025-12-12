import React, { useState } from 'react'

const InputHandle = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)

    const handleSubmit = () => {
        // console.log(name);
        // console.log(surname);

        const obj = { name, surname }
        // console.log(obj);

        if (editId != null) {
            let copyData = [...list]
            copyData[editId] = obj
            setList(copyData)
            setEditId(null)
        }
        else {
            setList([...list, obj])
        }

        // setList([...list, obj])


        setName('')
        setSurname('')
    }

    const deleteData = (index) => {
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
    }

    const editData = (edit, index) => {
        // console.log(edit);
        setName(edit.name)
        setSurname(edit.surname)
        setEditId(index)
    }

    // const editData = (index) => {
    //     let editItem = list[index]
    //     setName(editItem.name)
    //     setSurname(editItem.surname)
    //     deleteData(index)
    // }

    return (
        <>
            {/* <button value="hello" onClick={(e) => console.log(e.target.value)}>Click</button>
            <input type="text" onChange={(e) => console.log(e.target.value)} /> */}

            <input type="text" name="Name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input type="text" name="Surname" placeholder='Surname' value={surname} id="" onChange={(e) => setSurname(e.target.value)} />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>

            <div className='Div1'>
                <table border={1}>
                    <thead>
                        <tr className='TR'>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((i, index) => (
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.surname}</td>
                                    <td>
                                        <button onClick={() => editData(i, index)}>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteData(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default InputHandle