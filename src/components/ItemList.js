import Item from './Item';

export default function ItemList({items}){
    return (
        items.map((products) => 
        <Item 
        key={products.id}
        title={products.title}
        description={products.description}
        price={products.price}
        stock={products.stock}
        />)
    )
}