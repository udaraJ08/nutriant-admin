import React, {useState} from "react";
import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap";
import {useFormik} from "formik";
import '../../assets/dashboard.css'
import {useDispatch} from "react-redux";
import {createFruitListen} from "./actions";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

const Dashboard = () => {

    const [image, setImage] = useState()

    const dispatch = useDispatch()

    const validate = (values) => {
        dispatch(createFruitListen({...values, image}))
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            subTitle: '',
            gen_name: '',
            gen_genes: '',
            gen_family: '',
            gen_order: '',
            carbohydrates: '',
            protein: '',
            fat: '',
            calories: '',
            sugar: '',
        },
        onSubmit: values => {
            validate(values)
        }
    })

    const harvestBinaryData = (object) => {
        const binaryData = []
        binaryData.push(object)
        return binaryData
    }

    const handleImage1 = () => {

        if (image) {
            return <Label htmlFor="image">
                <p className="text-large text-black-50 font-bold mt-1">Upload Fruit image</p>
                <img width='350px' height='240px' className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image), {type: "application/zip"}))}/>
            </Label>
        } else {
            return <Label htmlFor="image">
                <div className="main-cat-upload-card flex-column">
                    <p className="text-large text-black-50 font-bold mt-1">Upload Fruit image</p>
                    <img
                        className="radius-10 object-fit"
                        width='350px' height='240px' src='http://www.ateliercaraco.com/_wp-content/plugins/widgetkit/assets/images/content-placeholder.svg'/>
                </div>
            </Label>
        }
    }

    return <div>
        <TopNavigation />
        <div className="mt-4">
            <Row className='mb-4'>
                <Col>
                    <Label htmlFor='image'>
                        {handleImage1()}
                    </Label>
                    <Input
                        onChange={(e) => setImage(e.target.files[0])}
                        id='image' hidden type='file'/>
                </Col>
            </Row>
            <Form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardHeader className="text-left text-light f-Staatliches bg-header text-header-topic">General
                        Data</CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={5}>
                                <Label>Fruit name</Label>
                                <Input
                                    id="name"
                                    name='name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                            </Col>
                            <Col lg={3}>
                                <Label>subtitle</Label>
                                <Input
                                    id="subTitle"
                                    name='subTitle'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.subTitle}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Label>description</Label>
                                <Input
                                    type='textarea'
                                    id="description"
                                    name='description'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card className="mt-5">
                    <CardHeader className="text-left text-light f-Staatliches bg-header text-header-topic">Scientific data</CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={3} className="mt-2">
                                <Label>General name</Label>
                                <Input
                                    id="gen_name"
                                    name='gen_name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gen_name}
                                />
                            </Col>
                            <Col lg={3} className="mt-2">
                                <Label>Genes</Label>
                                <Input
                                    id="gen_genes"
                                    name='gen_genes'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gen_genes}
                                />
                            </Col>
                            <Col lg={3} className="mt-2">
                                <Label>Family</Label>
                                <Input
                                    id="gen_family"
                                    name='gen_family'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gen_family}
                                />
                            </Col>
                            <Col lg={3} className="mt-2">
                                <Label>Order</Label>
                                <Input
                                    id="gen_order"
                                    name='gen_order'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gen_order}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card className="mt-5">
                    <CardHeader className="text-left text-light f-Staatliches bg-header text-header-topic">Nutrition data</CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={2} className="mt-3">
                                <Label>Carbohydrates</Label>
                                <Input
                                    id="carbohydrates"
                                    name='carbohydrates'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.carbohydrates}
                                />
                            </Col>
                            <Col lg={2} className="mt-3">
                                <Label>Protein</Label>
                                <Input
                                    id="protein"
                                    name='protein'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.protein}
                                />
                            </Col>
                            <Col lg={2} className="mt-3">
                                <Label>Fat</Label>
                                <Input
                                    id="fat"
                                    name='fat'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fat}
                                />
                            </Col>
                            <Col lg={2} className="mt-3">
                                <Label>Calories</Label>
                                <Input
                                    id="calories"
                                    name='calories'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.calories}
                                />
                            </Col>
                            <Col lg={2} className="mt-3">
                                <Label>Sugar</Label>
                                <Input
                                    id="sugar"
                                    name='sugar'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.sugar}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <div className="mt-2 w-100 d-flex justify-content-end">
                    <button className="btn btn-primary text-header-topic f-Staatliches">SUBMIT</button>
                </div>
            </Form>
        </div>
    </div>
}

export default Dashboard
