import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

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

    useEffect(() => { setStock(parseInt(props.stock))}, [props.stock])

    return(
        <div className="col-xs-2">
           <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                 <tbody>
                    <tr>
                       <th className="pl-0 w-25">Stock</th>
                       <td>{stock > 0 ? stock : <b>Sin Stock</b>}</td>
                    </tr>
                 </tbody>
              </table>
           </div>
           <p className="inline mr" style={{paddingLeft: '4px'}}><strong>Cantidad</strong></p>
           <Button variant="contained" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} size="small" onClick={decrement}>-</Button>
           <p className="inline margin-quantity">{count}</p>
           <Button variant="contained" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} size="small" onClick={increment}>+</Button>
           <div className="mt-3">
              <Button variant="contained" style={{textTransform: 'none'}} onClick={onAdd}>Agregar al carrito</Button>
           </div>
        </div>
    );
}

export default ItemCount;