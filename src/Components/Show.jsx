import React, { useState } from 'react'

const Show = () => {

    const [list, setList] = useState([])

    const templeItem = [
        { category: 'Temple', name: 'Dwarkadhish Temple' },
        { category: '', name: 'Badrinath Temple' },
        { category: '', name: 'Jagannath Temple' },
        { category: '', name: 'Ramanathaswamy Temple' },
        { category: '', name: 'Somnath Temple' }
    ]
    const flowerItem = [
        { category: 'Flower', name: 'Rose' },
        { category: '', name: 'Lily' },
        { category: '', name: 'Sunflower' },
        { category: '', name: 'Tulip' },
        { category: '', name: 'Daisy' }
    ]
    const animalItem = [
        { category: 'Animal', name: 'Dog' },
        { category: '', name: 'Cat' },
        { category: '', name: 'Cow' },
        { category: '', name: 'Elephant' },
        { category: '', name: 'Lion' }
    ]

    const allItem = [...animalItem, ...flowerItem, ...templeItem]

    const templeData = () => {
        setList(templeItem);
    }
    const flowersData = () => {
        setList(flowerItem);
    }
    const animalData = () => {
        setList(animalItem);
    }

    const allData = () => {
        setList(allItem)
    }

    return (
        <>

            <button onClick={allData}>All</button>
            <button onClick={templeData}>Temple</button>
            <button onClick={flowersData}>Flowers</button>
            <button onClick={animalData}>Animal</button>

            <div className='Div1'>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((i, index) =>
                            (
                                <tr>
                                    <td>{i.category}</td>
                                    <td>{i.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Show