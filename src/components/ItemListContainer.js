import ItemList from './ItemList';
import data from '../db/data';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
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
        getData(2000)
        .then(response => {
            setLoading(false);            
            setProducts(response);
        })
        .catch(error => console.log('ocurrio un error'));
    }, []);

    return (
        <>        
        <h1 className="d-flex justify-content-center mt-4">{props.title}</h1>
        <h4 className="d-flex justify-content-center">{props.greeting}</h4><br/>
        <div className="box-container">
            {loading ? <h5 className="d-flex justify-content-center">Cargando datos...</h5> : <ItemList items={products} />}
        </div>
        </>
    )
}

export default ItemListContainer;