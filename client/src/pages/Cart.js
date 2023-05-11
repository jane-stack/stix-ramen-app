function Cart({cartItem, onAddItem, onRemoveItem}) {
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItem.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItem.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAddItem(item)} className="add">+</button>
                        <button onClick={() => onRemoveItem(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {Number(item.qty)} x ${Number(item.price).toFixed(2)}
                        <hr/>
                        <br/>
                    </div>
                </div>
            ))}
        </aside>
    )
}
export default Cart;