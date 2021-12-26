import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import data from '../db/data';
import { useEffect, useState } from 'react';

export default function ItemDetailContainer(){
    const { idItem } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);    

    function getData(timeOut){
        setLoading(true);        
        return new Promise((resolve, reject) => {
            if (data.length > 0) {
                setTimeout(() => {
                    resolve(data)
                }, timeOut)
            } else {
                reject();
            }
        });
    }

    useEffect(() => {                
        getData(0)
        .then(response => {            
            setLoading(false);            
            setProduct(response.find(item => item.id === parseInt(idItem)));
        })
        .catch(error => console.log('ocurrio un error'));
    }, [idItem]);
    
    return (        
        <div>
            {loading ? <h5 className="d-flex justify-content-center mt-3">Cargando datos...</h5> : <ItemDetail item={product} />}
        </div>        
    )
}