import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
        <h1 className="d-flex justify-content-center mt-4">{props.title}</h1>
        <h4 className="d-flex justify-content-center">{props.greeting}</h4>
        <ItemCount initial="1" stock="7"/>                        
        </>
    )
}

export default ItemListContainer;