import ItemCount from './ItemCount';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function ItemDetail({ item }){
  const getCartContext = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);
  const onAdd = (qty) => {
    //alert('Has seleccionado: '+qty+' unidad(es)');
    setItemCount(qty);
    getCartContext.addCartItem(item, qty);
  }

    return (
      <section className="mb-5 mt-5 d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div id="mdb-lightbox-ui"></div>
            <div className="mdb-lightbox">
              <div className="row product-gallery mx-1">
                <div className="col-12 mb-0">
                  <figure className="view overlay rounded z-depth-1 main-img">
                    <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                      data-size="710x823">
                      <img src={item.pictureUrl}
                        className="img-fluid z-depth-1" alt="coffee"/>
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>{item.title}</h5>
            <p className="mb-2 text-muted text-uppercase small">{item.type}</p>
            <p><span className="mr-1"><strong>${item.price}</strong></span></p>
            <p className="pt-1">{item.description}</p>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-25">Origen</th>
                    <td>{item.country}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25">Contenido</th>
                    <td>{item.package}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
                {itemCount === 0
                ? <ItemCount initial="0" stock={item.stock} onAdd={onAdd} />
                : <Link to='/ecommerce-react/cart'> 
                    <Button variant="contained" style={{textTransform: 'none'}}>Checkout</Button>
                  </Link>
                }
          </div>
        </div>
      </section>
    )
}