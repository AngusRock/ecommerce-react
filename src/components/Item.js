import ItemCount from './ItemCount';

export default function Item(item){
    return (
        <div className="d-flex justify-content-center">
        <div className="box products">
            <h4>{item.title}</h4>
            <h6>{item.description} (${item.price})</h6>
            <img src={item.pictureUrl} alt="icono cafe" />            
            <ItemCount initial="1" stock={item.stock} />
            <div className="mt-3">
            <button type="button" className="btn btn-secondary btn-sm">Ver Detalle Producto</button>
            </div>
        </div>
    </div>
    )    
}