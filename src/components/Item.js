import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Item(item){
    return (
        <div className="d-flex justify-content-center">
        <div className="box products">
            <h4>{item.title}</h4>
            <p style={{fontSize: '15px'}}>({item.type} - {item.country})</p>
            <img src={item.smallPictureUrl} alt="icono cafe"/>
            <Link to={'/item/'+item.id} style={{textDecoration: "none"}}>
                <Button variant="contained" style={{textTransform: 'none'}} className="mt-3">Detalle Producto</Button>
            </Link>
        </div>
    </div>
    )
}