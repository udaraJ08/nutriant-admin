import React, { useEffect } from 'react';
import styles from './login.module.css';
import bgImage from '../../assets/icons/login-page-bg-image.svg';
import bgImage2 from '../../assets/icons/login-page-bg-image2.svg';
import handIcon from '../../assets/icons/icon-hand.gif';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { fireAlert } from '../../utils/utils';
import { ERROR } from '../../utils/consts';
import { Col, Form, Input, Row } from 'reactstrap';

function Login() {
    const history = useHistory();
    // dispatcher
    const dispatch = useDispatch();

    // selectors
    const user = useSelector((state) => state.signInReducer.currentUser);

    useEffect(() => {
        // get currentUser from localStorage
        const currentUser = localStorage.getItem('currentUser');
        if (user || currentUser) {
            history.push('/dashboard/admin');
        }
    }, [user]);

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
            <div className={`container-fluid ${styles.mainContainer}`}>
                <img src={bgImage2} alt="bg-image-1" className={styles.bgImage2} />
                <img src={bgImage} alt="bg-image-2" className={styles.bgImage} />
                <div className={`row ${styles.rowContainer}`}>
                    <div className={`col ${styles.imageContainer}`}>
                        <h1 className={styles.bgTitle}>
                            Welcome to <span className={styles.bgTitleSub}>LMS</span>
                        </h1>
                        <div className={styles.triangle} />
                        <div className={styles.circle1} />
                        <div className={styles.circle2} />
                    </div>
                    <div className={`col d-flex flex-column justify-content-center align-items-center gap-4`}>
                        <div className={'mb-3 d-flex flex-row justify-content-center align-items-center gap-2'}>
                            <h1 className={styles.hiTitle}>Hello!</h1>
                            <img src={handIcon} alt="hand-icon" style={{ width: 30, marginTop: -6 }} />
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
                            <Row className={`mt-1 mb-3 ${styles.forgotPassword}`}>
                                <Col lg={12}>
                                    <span style={{ color: '#a1a1a1', fontWeight: 500 }}>Forgot Password?</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <button className={`btn mb-4 ${styles.clickable} ${styles.signInButton}`}>Sign In</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
