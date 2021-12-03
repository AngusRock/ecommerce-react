import Item from './Item';

export default function ItemList({items}){
    return (
        items.map((products) => 
        <Item 
        key={products.id}
        title={products.title}
        type={products.type}
        price={products.price}
        stock={products.stock}
        pictureUrl={products.pictureUrl}
        id={products.id}
        country={products.country}
        smallPictureUrl={products.smallPictureUrl}
        />)
    )
}