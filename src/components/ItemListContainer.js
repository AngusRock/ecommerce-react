import ItemList from './ItemList';
import data from '../db/data';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    function getData(timeOut){
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
            setProducts(response);
        })
        .catch(error => console.log('ocurrio un error'));
    })

    return (
        <>
        <h1 className="d-flex justify-content-center mt-4">{props.title}</h1>
        <h4 className="d-flex justify-content-center">{props.greeting}</h4><br/>
        <div className="box-container">
            {products.length > 0 ? <ItemList items={products} /> : <h5 className="d-flex justify-content-center">Cargando datos...</h5>}
        </div>
        </>
    )
}

export default ItemListContainer;