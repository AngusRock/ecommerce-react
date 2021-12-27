import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import './ItemListContainer.css';
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import './Cart.css';

export default function Cart(){
    const getCartContext = useContext(CartContext);
    let cartList = getCartContext.cartList;

    useEffect(() => {
        getCartContext.calculateSubtotal();
      }, [getCartContext]);        

    if(cartList.length === 0) {
        return (
        <>
            <h4 className="d-flex justify-content-center mt-4">Carrito Vacio</h4>
            <div className="d-flex justify-content-center mt-4">
                <Link to='/ecommerce-react' style={{textDecoration: "none"}}>
                    <Button variant="contained" style={{textTransform: 'none'}}>Listar Productos</Button>
                </Link>
            </div>
        </>
        ); }

    return(
        <div className="container mt-5 p-3 rounded cart">
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="product-details mr-2">
                        <div className="d-flex flex-row align-items-center">
                            <i className="fa fa-long-arrow-left"></i>
                            <Link to='/ecommerce-react' style={{textDecoration: "none"}}>
                                <span className="ml-2">Continuar Comprando</span>
                            </Link>
                        </div>
                        <hr/>
                        <h6 className="mb-0">Carrito de Compras</h6>
                        <div className="d-flex justify-content-between"><span>{'Tienes '+cartList.length+' item(s) en tu carrito'}</span>
                            <div className="d-flex flex-row align-items-center">
                                <Button variant="contained" style={{textTransform: 'none'}} onClick={() => getCartContext.removeAllItems()}>Eliminar Todos</Button>
                            </div>
                        </div>
                        {cartList.map((item) =>
                            <CartItems
                                key={item.id}
                                title={item.title}
                                package={item.package}
                                price={item.price}
                                id={item.id}
                                country={item.country}
                                qty={item.qty}
                                picture={item.picture}
                            />
                        )}
                    </div>
                </div>                
                <div className="col-md-4">
                    <div className="payment-info">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Detalles de la Compra</span>
                        </div>
                        <hr className="line" />
                        <div className="d-flex justify-content-between information"><span>Subtotal</span><span>${getCartContext.subtotal}</span></div>
                        <div className="d-flex justify-content-between information"><span>IVA 21%</span><span>${getCartContext.subtotal * 0.21}</span></div>
                        <div className="d-flex justify-content-between information"><span>Total (IVA incl.)</span><span>${getCartContext.subtotal * 1.21}</span></div>
                        <button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button">
                            <span>${getCartContext.subtotal * 1.21}</span>
                            <span>Terminar Compra<i className="fa fa-long-arrow-right ml-1"></i></span>
                        </button>
                    </div>
                </div>                
            </div>
        </div>
    );
}