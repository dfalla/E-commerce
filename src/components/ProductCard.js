
import './ProductCard.scss';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/ProductActions';

const ProductCard = (props) => {

    const dispatch = useDispatch();

    const submitAddToCart = (event) => {

        event.preventDefault();

        let data = event.target.parentNode.childNodes;

        let product = {
            id: data[0].value,
            title: data[1].value,
            price: data[2].value
        };

        dispatch(actions.addProductCart(product));

        alert("Producto agregado al carrito");
    }
    
    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 0
    })

    return (

        <React.Fragment>


            <Card className="product-card" >
                <Card.Img variant="top" src={props.thumb} />
                <Card.Body>

                    <input name="id" value={props.id} disabled hidden />
                    <input name="title" value={props.title} disabled hidden />
                    <input name="price" value={props.price} disabled hidden />

                    <Card.Title>{props.title}  </Card.Title>
                    <Card.Text>{formatter.format(props.price)}
                    </Card.Text>
                    <Button variant="primary" onClick={submitAddToCart} value={props}>Agregar al carrito</Button>
                </Card.Body>
            </Card>

        </React.Fragment>
    )
};

export default ProductCard;