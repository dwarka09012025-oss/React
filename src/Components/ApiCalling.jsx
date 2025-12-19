import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

const ApiCalling = () => {

    const [list, setList] = useState([])
    // const [list1, setList1] = useState([])
    const [list2, setList2] = useState([])
    const [list3, setList3] = useState([])

    // const [no, setNo] = useState(0)
    // useEffect(() => {
    //     console.log("test");

    //     dataView()
    // }, [no])

    useEffect(() => {
        // console.log("test");

        ProductesData()
        // CardData()
        PostData()
        CommentsData()
    }, [])

    function ProductesData() {
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                console.log(res.data.products);
                setList(res.data.products)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // function CardData() {
    //     axios.get('https://dummyjson.com/carts')
    //         .then((res) => {
    //             console.log(res.data.carts);
    //             setList1(res.data.carts)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    function PostData() {
        axios.get('https://dummyjson.com/posts')
            .then((res) => {
                console.log(res.data.posts);
                setList2(res.data.posts)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function CommentsData() {
        axios.get('https://dummyjson.com/comments')
            .then((res) => {
                console.log(res.data.comments);
                setList3(res.data.comments)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>

            {/* <button onClick={() => setNo(no + 1)}>click</button> */}

            <center>
                <Container>

                    <h1 style={{ padding: '25px 0px' }}>Productes Data</h1>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>discountPercentage</th>
                                <th>rating</th>
                                <th>stock</th>
                                <th>sku</th>
                                <th>weight</th>
                                <th>warrantyInformation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((i, index) => (
                                    <tr key={index}>
                                        <td>{i.id}</td>
                                        <td>{i.title}</td>
                                        <td>{i.description}</td>
                                        <td>{i.category}</td>
                                        <td>{i.brand}</td>
                                        <td>{i.price}</td>
                                        <td>{i.discountPercentage}</td>
                                        <td>{i.rating}</td>
                                        <td>{i.stock}</td>
                                        <td>{i.sku}</td>
                                        <td>{i.weight}</td>
                                        <td>{i.warrantyInformation}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <br /><br /><br />

                    {/* <h1 style={{ padding: '25px 0px' }}>Cards Data</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list1.map((i, index) => (
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.products.id}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br /><br /><br /> */}

                    <h1 style={{ padding: '25px 0px' }}>Posts Data</h1>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>title</th>
                                <th>body</th>
                                <th>views</th>
                                <th>userId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list2.map((i, index) => (
                                    <tr key={index}>
                                        <td>{i.id}</td>
                                        <td>{i.title}</td>
                                        <td>{i.body}</td>
                                        <td>{i.views}</td>
                                        <td>{i.userId}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <br /><br /><br />

                    <h1 style={{ padding: '25px 0px' }}>Comments Data</h1>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>body</th>
                                <th>postId</th>
                                <th>likes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list3.map((i, index) => (
                                    <tr key={index}>
                                        <td>{i.id}</td>
                                        <td>{i.body}</td>
                                        <td>{i.postId}</td>
                                        <td>{i.likes}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </Container>
            </center>

        </>
    )
}

export default ApiCalling