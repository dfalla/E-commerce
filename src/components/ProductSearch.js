import './ProductSearch.scss';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import * as actions from '../store/actions/ProductActions';

const ProductSearch = () => {

    const dispatch = useDispatch();
    const [productName, setProductName] = useState({"productName" : ""});

    useEffect(() => {
        getAllProducts();
    }, []);

    const submitSearch = (event) => {
        event.preventDefault();
        getAllProducts();
    }

    const getAllProducts =()=>{
        dispatch(actions.listProducts(productName));
    }

    const handleInputChange = (event) => {
        setProductName({
            ...productName,
            [event.target.name]: event.target.value
        });
    }

    return (
        <React.Fragment>

            <Form onSubmit={submitSearch}>

                <Form.Group as={Row} className="mb-3" controlId="Form.Rows">
                    <Form.Label column sm={2}>Nombre Producto</Form.Label>
                    <Col sm={3}>
                        <Form.Control
                            type="input"
                            name="productName"
                            onChange={handleInputChange} />
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" id="createWorld" >
                            Search
                        </Button>
                    </Col>
                </Form.Group>

            </Form>

        </React.Fragment>
    )
}

export default ProductSearch;