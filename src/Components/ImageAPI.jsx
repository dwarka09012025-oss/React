// import axios from 'axios';
// import { Field, Form, Formik } from 'formik';
// import React, { useEffect, useState } from 'react';
// import { ToastContainer } from 'react-bootstrap';
// import { Slide, toast } from 'react-toastify';

// const ImageAPI = () => {
//     const [image, setImage] = useState([]);
//     const ini = { name: '', image: null };
//     const token = 'zhEXSNEXiWnz3b61';

//     useEffect(() => {
//         imageData();
//     }, []);

//     const imageData = () => {
//         axios.get('https://generateapi.techsnack.online/api/APIcalling', {
//             headers: { Authorization: token }
//         })
//             .then((res) => {
//                 console.log(res);
//                 setImage(res.data.Data || []);
//             })
//             .catch((err) => console.error("Fetch error:", err));
//     };

//     const PostImage = (values, { resetForm }) => {
//         const formData = new FormData();
//         formData.append("name", values.name);
//         formData.append("image", values.image);

//         axios.post("https://generateapi.techsnack.online/api/APIcalling", formData, {
//             headers: {
//                 Authorization: token,
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//             .then(() => {
//                 toast.success("Data Added Successfully!");
//                 resetForm();
//                 imageData();
//             })
//             .catch((err) => {
//                 toast.error("Error Adding product");
//                 console.log(err);
//             });
//     }

//     return (
//         <>
//             <h1>Image Calling</h1>

//             <Formik initialValues={ini} onSubmit={PostImage}>
//                 {({ setFieldValue }) => (
//                     <Form>
//                         <Field type="text" name="name" placeholder="Name" /><br /><br />

//                         <input
//                             type="file"
//                             name="image"
//                             onChange={(event) => {
//                                 setFieldValue("image", event.currentTarget.files[0]);
//                             }}
//                         /><br /><br />

//                         <button type="submit" className='Button'>Submit</button>
//                     </Form>
//                 )}
//             </Formik>

//             <table border="1" style={{ marginTop: '20px', width: '50%' }}>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {image.map((i) => (
//                         <tr key={i._id}>
//                             <td>{i.name}</td>
//                             <td>
//                                 {i.image && (
//                                     <img
//                                         src={i.image}
//                                         alt="uploaded"
//                                         width="100"
//                                     />
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <ToastContainer position="bottom-right" transition={Slide} />
//         </>
//     )
// }

// export default ImageAPI;

import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Slide, toast } from 'react-toastify';

const ImageAPI = () => {
    const [image, setImage] = useState([]);
    const ini = { name: '', image: null };
    const token = 'zhEXSNEXiWnz3b61';

    useEffect(() => {
        imageData();
    }, []);

    const imageData = () => {
        axios.get('https://generateapi.techsnack.online/api/APIcalling', {
            headers: { Authorization: token }
        })
            .then((res) => {
                setImage(res.data.Data || []);
            })
            .catch((err) => console.error("Fetch error:", err));
    };

    const PostImage = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("image", values.image);

        axios.post("https://generateapi.techsnack.online/api/APIcalling", formData, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                toast.success("Data Added Successfully!");
                resetForm();
                imageData();
            })
            .catch((err) => {
                toast.error("Error Adding product");
                console.log(err);
            });
    }

    return (
        <div className="api-container">
            <h1 className="title">Image Gallery Manager</h1>

            <div className="form-card">
                <Formik initialValues={ini} onSubmit={PostImage}>
                    {({ setFieldValue, values }) => (
                        <Form className="styled-form">
                            <div className="input-group">
                                <label>Name</label>
                                <Field type="text" name="name" placeholder="Enter name..." className="custom-input" />
                            </div>

                            <div className="input-group">
                                <label>Upload Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="file-input"
                                    onChange={(event) => {
                                        setFieldValue("image", event.currentTarget.files[0]);
                                    }}
                                />
                            </div>

                            <button type="submit" className='submit-btn'>Upload Product</button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="table-wrapper">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {image.map((i) => (
                            <tr key={i._id}>
                                <td data-label="Name">{i.name}</td>
                                <td data-label="Image">
                                    {i.image && (
                                        <img
                                            src={i.image}
                                            alt="uploaded"
                                            className="table-img"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer position="bottom-right" transition={Slide} />
        </div>
    )
}

export default ImageAPI;