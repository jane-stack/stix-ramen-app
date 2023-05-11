function Cart({cartItem, onAddItem, onRemoveItem}) {
    const itemsPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * .065;
    const deliveryPrice = 12;
    const totalPrice = itemsPrice + taxPrice + deliveryPrice;

    const onCheckOut = () => {
        alert("Thank you for your order!")
    }

    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItem.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItem.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2 text-left">{item.name}</div>
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
            {cartItem.length !== 0 && (
                <>
                <hr/>
                <div className="row">
                    <div className="col-2 text-left">Items</div>
                    <div className="col-1 text-right">${Number(itemsPrice.toFixed(2))}</div>
                </div>
                <div className="row">
                    <div className="col-2 text-left">Tax</div>
                    <div className="col-1 text-right">${Number(taxPrice.toFixed(2))}</div>
                </div>
                <div className="row">
                    <div className="col-2 text-left">Delivery Fee</div>
                    <div className="col-1 text-right">${Number(deliveryPrice.toFixed(2))}</div>
                </div>
                <div className="row">
                    <div className="col-2 text-left"><strong>Total</strong></div>
                    <div className="col-1 text-right"><strong>${Number(totalPrice.toFixed(2))}</strong></div>
                </div>
                </>
            )}
            <br/>
            <br/>
            <br/>
            <button className="btn" onClick={onCheckOut}>Check Out</button>
        </aside>
    )
}
export default Cart;