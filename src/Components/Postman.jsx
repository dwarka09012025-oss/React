/* eslint-disable array-callback-return */
import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Postman = () => {

    // const [product, setProduct] = useState([]);
    // const [editproduct, setEditproduct] = useState(null);

    // const ini = editproduct ? { ProductId: editproduct.ProductId, ProductName: editproduct.ProductName, Price: editproduct.Price }
    //     : { ProductId: "", ProductName: "", Price: "" };
    // const token = 'LpVCE0K5OOBStEfx';
    // // const apiUrl = 'https://generateapi.techsnack.online/api/Product';

    // useEffect(() => {
    //     productData();
    // }, []);

    // const productData = () => {
    //     axios.get('https://generateapi.techsnack.online/api/Product', {
    //         headers: { Authorization: token }
    //     })
    //         .then((res) => {
    //             setProduct(res.data.Data || []);
    //         })
    //         .catch((err) => console.error("Fetch error:", err));
    // };

    // const deleteData = (id) => {
    //     axios.delete(`https://generateapi.techsnack.online/api/Product/${id}`, {
    //         headers: { Authorization: token }
    //     })
    //         .then(() => {
    //             toast.success("Deleted Successfully");
    //             productData();
    //         })
    //         .catch((err) => console.log(err));
    // };

    // const PostData = (values, { resetForm }) => {
    //     console.log(values);

    //     if (editproduct) {
    //         axios.patch(`https://generateapi.techsnack.online/api/Product/${editproduct._id}`, values, {
    //             headers: { Authorization: token }
    //         })

    //             .then(() => {
    //                 toast.success("Updated Successfully!");
    //                 setEditproduct(null);
    //                 resetForm();
    //                 productData();
    //             })
    //             .catch((err) => {
    //                 toast.error("Update Faill!");
    //                 console.log(err);
    //             });
    //     } else {
    // axios.post("https://generateapi.techsnack.online/api/Product", values, {
    //     headers: {
    //         Authorization: token,
    //         'Content-Type': 'application/json'
    //     }
    // })
    //     .then(() => {
    //         toast.success("Data Added Successfully!");
    //         resetForm();
    //         productData();
    //     })
    //     .catch((err) => {
    //         toast.error("Error Adding product");
    //         console.log(err);
    //     });
    //     }
    // };

    const [user, setUser] = useState([]);
    const [edituser, setEdituser] = useState(null);
    const [search, setSearch] = useState('')

    const iniuser = edituser ? { username: edituser.username, password: edituser.password }
        : { username: "", password: "" };
    const token1 = 'mDIdSG3aiGfCSDrs';

    useEffect(() => {
        userData();
    }, []);

    const userData = () => {
        axios.get('https://generateapi.techsnack.online/api/user', {
            headers: { Authorization: token1 }
        })
            .then((res) => {
                console.log(res);
                setUser(res.data.Data || []);
            })
            .catch((err) => console.error("Fetch error:", err));
    };

    const PostUser = (values, { resetForm }) => {
        console.log(values);

        if (edituser) {
            axios.patch(`https://generateapi.techsnack.online/api/user/${edituser._id}`, values, {
                headers: { Authorization: token1 }
            })
                .then(() => {
                    toast.success("Updated Successfully!");
                    setEdituser(null);
                    resetForm();
                    userData();
                })
                .catch((err) => {
                    toast.error("Update Faill!");
                    console.log(err);
                });
        }
        else {
            axios.post("https://generateapi.techsnack.online/api/user", values, {
                headers: {
                    Authorization: token1,
                    'Content-Type': 'application/json'
                }
            })
                .then(() => {
                    toast.success("Data Added Successfully!");
                    resetForm();
                    userData();
                })
                .catch((err) => {
                    toast.error("Error Adding product");
                    console.log(err);
                });
        }
    }

    const deleteuser = (id) => {
        axios.delete(`https://generateapi.techsnack.online/api/user/${id}`, {
            headers: { Authorization: token1 }
        })
            .then(() => {
                toast.success("Deleted Successfully");
                userData();
            })
            .catch((err) => console.log(err));
    };

    const datasrch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    return (
        <>
            <Container>
                <div className='Div1'>
                    {/* <div className='w-50'>
                        <div className='Product'>
                            <h1 style={{ padding: '25px 0px' }}>Products Data</h1>

                            <Formik initialValues={ini} enableReinitialize={true} onSubmit={PostData}>
                                <Form>
                                    <Field type="number" name="ProductId" placeholder="Product ID" /><br /><br />
                                    <Field type="name" name="ProductName" placeholder="Product Name" /><br /><br />
                                    <Field type="number" name="Price" placeholder="Price" /><br /><br />
                                    <button type="submit" className='Button'>Submit</button>
                                </Form>
                            </Formik>
                        </div>

                        <table border={1} style={{ width: '100%', textAlign: 'center' }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((i, _id) => (
                                    <tr key={i._id}>
                                        <td>{i.ProductId}</td>
                                        <td>{i.ProductName}</td>
                                        <td>{i.Price}</td>
                                        <td>
                                            <button className='Button' onClick={() => setEditproduct(i)}>Edit</button>
                                        </td>
                                        <td>
                                            <button className='Button' onClick={() => deleteData(i._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <ToastContainer position="bottom-right" transition={Slide} />
                    </div> */}
                    <div className='w-50'>
                        <div className='Product'>
                            <h1 style={{ padding: '25px 0px' }}>User Data</h1>

                            <Formik initialValues={iniuser} enableReinitialize={true} onSubmit={PostUser}>
                                <Form>
                                    <Field type="name" name="username" placeholder="User name" /><br /><br />
                                    <Field type="number" name="password" placeholder="Password" /><br /><br />
                                    <button type="submit" className="Button">Submit</button>
                                </Form>
                            </Formik>
                            <input type="text" onChange={(e) => datasrch(e)} placeholder='Search' /><br /><br />
                        </div>

                        <table border={1} style={{ width: '100%', textAlign: 'center' }}>
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Password</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user
                                    .filter((i) => {
                                        if (search === "") {
                                            return i;
                                        }
                                        else if (i.username.toLowerCase().includes(search.toLowerCase())) {
                                            return i;
                                        }
                                    })
                                    .map((i) => (
                                        <tr key={i._id}>
                                            <td>{i.username}</td>
                                            <td>{i.password}</td>
                                            <td>
                                                <button className='Button' onClick={() => setEdituser(i)}>Edit</button>
                                            </td>
                                            <td>
                                                <button className='Button' onClick={() => deleteuser(i._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                        <ToastContainer position="bottom-right" transition={Slide} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Postman;