import {useState} from 'react';

function ItemCount(props){
    const [count, setCount] = useState(parseInt(props.initial));
    const [stock, setStock] = useState(parseInt(props.stock));

    function increment(){
        if(count < props.stock) setCount(count + 1);        
    }
    function decrement(){
        if(count > 0) setCount(count - 1);        
    }

    function onAdd(){
        setStock(stock - count);
    }

    return(
        <>          
        <div className="col-xs-2">
            <div className="price">Stock Disponible: {stock > 0 ? stock : <b>Sin Stock</b>}</div>
            <p className="inline mr">Cantidad:</p>
            <button className="btn-primary btn-sm" onClick={decrement}>-</button>
            <p className="inline mr ml">{count}</p>
            <button className="btn-primary btn-sm" onClick={increment}>+</button>
        </div>
        <div className="mt-3">
            <button type="button" className="btn btn-primary btn-sm" onClick={onAdd}>Agregar al carrito</button>
        </div>
        </>
    );
}

export default ItemCount;