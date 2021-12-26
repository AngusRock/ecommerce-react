import { Button } from '@mui/material';
import { CartContext } from './CartContext';
import { useContext } from 'react';

export default function CartItems(item){
    const getCartContext = useContext(CartContext);

    return (
        <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
            <div className="d-flex flex-row"><img className="rounded" src={item.picture} width="40" alt="imagen"/>
                <div className="ml-2">
                    <span className="font-weight-bold d-block">{item.title}</span>
                    <span className="spec">{item.package}, {item.country}</span>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center">
            {/*<span className="font-weight-bold">-</span>*/}
            <span className="d-block pl-2 pr-2 ml-1 mr-1">{item.qty}</span>
            {/*<span className="font-weight-bold">+</span>*/}
            <span className="d-block ml-5 font-weight-bold">${item.price * item.qty}</span>
            <span className="text-muted ml-1" style={{fontSize: "13px"}}> (${item.price} c/u)</span>
            <Button onClick={() => getCartContext.removeItem(item.id)}><i className="fa fa-trash-o ml-3 text-black-50"></i></Button>
            </div>
        </div>
    );
}