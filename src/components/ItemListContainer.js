import ItemList from './ItemList';
import data from '../db/data';
import { useEffect, useState, useCallback } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { catName } = useParams();

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

    const filterCategory = useCallback((response) => {
        return response.filter(item => item.category === catName.toLowerCase());
    }, [catName]);
    
    useEffect(() => {        
        getData(2000)
        .then(response => {
            setLoading(false);                        
            setProducts(catName === undefined ? response : filterCategory(response));
        })
        .catch(error => console.log('ocurrio un error'));
    }, [catName, filterCategory]);

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