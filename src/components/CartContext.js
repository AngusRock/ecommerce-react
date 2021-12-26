import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);
    const [subtotal, setSubtotal] = useState();
    const [cartQty, setCartQty] = useState(0);
    
    const removeItem = (itemId) => {        
        let cartListResult = cartList.filter(item => item.id !== itemId);                
        setCartList(cartListResult);
        setCartQty(updateCartQty(cartListResult));
    }

    const updateCartQty = (cartList) => {
        let qtySum = 0;
        for (const item of cartList) {
            qtySum += item.qty;
        }
        calculateSubtotal();
        return qtySum;
    }

    const calculateSubtotal = () => {        
        let subtotalSum = 0;
        for (const item of cartList) {
            subtotalSum += (item.price * item.qty);            
        }
        setSubtotal(subtotalSum);
    }
    
    const removeAllItems = () => {
        setCartList([]);
        setCartQty(0);
        setSubtotal(0);
    }    

    const addCartItem = (item, qty) => {
        let foundItem = cartList.find(product => product.id === item.id);        
        if(foundItem === undefined){
            setCartList([
                ...cartList,
                {   
                    id: item.id,
                    price: item.price,
                    picture: item.smallPictureUrl,
                    title: item.title,
                    package: item.package,
                    country: item.country,
                    qty: qty
                }
            ]);
        } else {
            foundItem.qty += qty;
        }        
        setCartQty(cartQty + qty);        
    }

    return (
        <CartContext.Provider value={{ cartList, addCartItem, removeItem, removeAllItems, cartQty, calculateSubtotal, subtotal }}>
            {children}
        </CartContext.Provider>
    );
}