import Item from './Item';

export default function ItemList({items}){
    return (
        items.map((product) => 
        <Item 
            key={product.id}
            title={product.title}
            type={product.type}
            price={product.price}
            stock={product.stock}            
            id={product.id}
            country={product.country}
            smallPictureUrl={product.smallPictureUrl}
        />)
    )
}