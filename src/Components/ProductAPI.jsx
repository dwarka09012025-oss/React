/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

const ProductAPI = () => {

    const ini = {
        name: "", Price: "", MRP: "", image: null, other_image: null, rating: ""
    }
    const [products, setProducts] = useState([])
    const token = 'yJLg0hBgtPcJ6ElT';

    useEffect(() => {
        imageData();
    }, []);

    const imageData = () => {
        axios.get('https://generateapi.techsnack.online/api/product_card', {
            headers: { Authorization: token }
        })
            .then((res) => {
                console.log(res);
                setProducts(res.data.Data || []);
            })
            .catch((err) => console.error("Fetch error:", err));
    };

    const PostData = () => { }

    return (
        <>
            <Container style={{ alignItems: 'center' }}>
                <h1>Product API calling</h1>
                <Formik initialValues={ini} enableReinitialize={true} onSubmit={PostData}>
                    <Form>
                        <Field type="text" name="name" placeholder="Product Name" /><br /><br />
                        <Field type="text" name="price" placeholder="Product Price" /><br /><br />
                        <Field type="text" name="MRP" placeholder="MRP" /><br /><br />
                        <Field type="text" name="rating" placeholder="rating" /><br /><br />
                        <Field type="file" name="image" placeholder="Image" /><br /><br />
                        <Field type="file" name="other_image" placeholder="Other Image" /><br /><br />
                        <button type="submit" className='Button'>Submit</button>
                    </Form>
                </Formik>

                {/* <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>MRP</th>
                            <th>Image</th>
                            <th>Rating</th>
                            <th>Other Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.MRP}</td>
                                <td><img src={product.image} alt="Product" width="100" /></td>
                                <td>
                                    {
                                        Array.from({ length: 5 }, (_, index) => (
                                            <span key={index}>
                                                {index < product.rating ? '⭐' : '☆'}
                                            </span>
                                        ))
                                    }
                                </td>
                                <td>
                                    <img src={product.other_image[0]} alt="Other Image" width="100" />
                                    <img src={product.other_image[1]} alt="Other Image" width="100" />
                                    <img src={product.other_image[2]} alt="Other Image" width="100" />
                                    <img src={product.other_image[3]} alt="Other Image" width="100" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}

                <div>
                    {products.map((product) => (
                        <div key={product.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                            <div>
                                <img src={product.image} alt="Product" width="100" />
                            </div>
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <p>MRP: {product.MRP}</p>
                            <div>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index}>
                                        {index < product.rating ? '⭐' : '☆'}
                                    </span>
                                ))}
                            </div>
                            <div>
                                {product.other_image && product.other_image.map((imgUrl, idx) => (
                                    <img key={idx} src={imgUrl} alt={`Other Image ${idx + 1}`} width="100" style={{ marginRight: '5px' }} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
            {/* {product.rating}/5 '★''☆' */}
        </>
    )
}

export default ProductAPI