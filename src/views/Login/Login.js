import React, {useEffect} from 'react';
import styles from './login.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {fireAlert} from '../../utils/utils';
import {ERROR} from '../../utils/consts';
import {Col, Form, Input, Row} from 'reactstrap';
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    // dispatcher
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: (values) => {
            validate(values);
        },
    });

    const validate = (values) => {
        if (!values.userName) {
            fireAlert('Oops', 'Username should be added!', ERROR);
            return;
        }

        if (!values.password) {
            fireAlert('Oops', 'Password should be added!', ERROR);
            return;
        }
        console.log(values)
    };

    return (
        <div className="App">
            <div className={`container-fluid d-center ${styles.mainContainer}`}>
                <div className={`row ${styles.rowContainer}`}>
                    <div className={`col d-flex flex-column justify-content-center align-items-center position-relative`}>
                        <div className={'mb-3 d-flex flex-row justify-content-center align-items-center gap-2'}>
                            <h1 className={styles.hiTitle}>Hello!</h1>
                        </div>
                        <h2 className={styles.title}>Sign in to your account to continue...</h2>
                        <Form className={`p-4 ${styles.form}`} onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col lg={12}>
                                    <Input
                                        value={formik.values.userName}
                                        name="userName"
                                        id="userName"
                                        placeholder="Username"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg={12}>
                                    <Input
                                        value={formik.values.password}
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Col>
                            </Row>
                            <div className='mt-4 d-center'>
                                <button className={`btn ${styles.clickable} ${styles.signInButton}`}>
                                    Sign In
                                </button>
                            </div>
                        </Form>
                        <div className='position-absolute radius-100' style={{bottom: -80}}>
                            <div className={`p-5 ${styles.insetShadowRound}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
