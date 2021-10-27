import './ProductCart.scss';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const ProductCart = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let totalPrice = 0;

    const productsInCart = useSelector(store => store.productsInCart);

      
    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 0
    })

    return (
        <React.Fragment>

            <Button variant="info" onClick={handleShow}>
               Ver carrito de compras
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Lista de productos agregados</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p>
                       Cantidad de productos : {productsInCart.length}
                    </p>
                    <Table >


                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productsInCart.map(product => {

                                    totalPrice += parseFloat(product.price);

                                    return <tr >
                                        <td key={"t" + product.id}> {product.title}</td>
                                        <td key={"p" + product.id}> {formatter.format(product.price)}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td key="total"> Total a Pagar</td>
                                <td key="totalPrice">{formatter.format(totalPrice)} </td>
                            </tr>
                        </tfoot>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </React.Fragment>

    )
}

export default ProductCart;