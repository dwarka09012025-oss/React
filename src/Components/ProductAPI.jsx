/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ProductAPI = () => {
    const ini = {
        name: "", price: "", MRP: "", image: null, other_image: [], rating: ""
    };

    const [products, setProducts] = useState([]);
    const token = 'yJLg0hBgtPcJ6ElT';

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('https://generateapi.techsnack.online/api/product_card', {
            headers: { Authorization: token }
        })
            .then((res) => {
                console.log(res);
                setProducts(res.data.Data || []);
            })
            .catch((err) => console.error("Fetch error:", err));
    };

    const PostData = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("price", values.price);
        formData.append("MRP", values.MRP);
        formData.append("rating", values.rating);

        if (values.image) formData.append("image", values.image);

        if (values.other_image) {
            for (let i = 0; i < values.other_image.length; i++) {
                formData.append("other_image[]", values.other_image[i]);
            }
        }

        axios.post("https://generateapi.techsnack.online/api/product_card", formData, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                toast.success("Data Added Successfully!");
                resetForm();
                getData();
            })
            .catch((err) => {
                toast.error("Error Adding product");
                console.error(err);
            });
    }

    return (
        <Container className="py-5 ">
            <h1>Product API calling</h1>
            <Formik initialValues={ini} onSubmit={PostData}>
                {({ setFieldValue }) => (
                    <Form>
                        <Field type="text" name="name" placeholder="Product Name" className="form-control mb-2" />
                        <Field type="text" name="price" placeholder="Product Price" className="form-control mb-2" />
                        <Field type="text" name="MRP" placeholder="MRP" className="form-control mb-2" />
                        <Field type="text" name="rating" placeholder="Rating (1-5)" className="form-control mb-2" />

                        <label>Main Image:</label>
                        <input type="file" name="image" className="form-control mb-2"
                            onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                        />

                        <label>Other Images:</label>
                        <input type="file" name="other_image" className="form-control mb-4" multiple
                            onChange={(e) => setFieldValue("other_image", e.currentTarget.files)}
                        />

                        <button type="submit" className='Button'>Submit Product</button>
                    </Form>
                )}
            </Formik>

            <hr />

            <div className="d-flex flex-wrap">
                {products.map((product) => (
                    <div key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '15px', width: '300px' }}>
                        <div>
                            <img src={product.image} alt="Product" style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                        </div>
                        <h3 className="mt-2">{product.name}</h3>
                        <p className="mb-1"><strong>Price:</strong> {product.price}</p>
                        <p className="mb-1"><strong>MRP:</strong><del className='text-decoration-line-through'>{product.MRP}</del></p>
                        <div className="mb-2">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} style={{ color: 'gold' }}>
                                    {index < product.rating ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <div className="d-flex flex-wrap gap-1">
                            {Array.isArray(product.other_image) && product.other_image.map((imgUrl, idx) => (
                                <img key={idx} src={imgUrl} alt={`Other ${idx}`} width="50" height="50" style={{ objectFit: 'cover', border: '1px solid #eee' }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default ProductAPI;