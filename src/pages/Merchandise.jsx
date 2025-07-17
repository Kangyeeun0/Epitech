import React, { useState } from 'react';

export default function Merchandise() {
    const [cartVisible, setCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    const addToCart = (name, price) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.name === name);
            if (existing) {
                return prev.map(item =>
                    item.name === name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { name, price, quantity: 1 }];
            }
        });
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div id="market">
            <button className="cart-icon" onClick={toggleCart}>🛒 Cart</button>

            {cartVisible && (
                <div className="cart-box">
                    <h3>Shopping Cart</h3>
                    <div>
                        {cartItems.map(item => (
                            <div key={item.name}>
                                {item.name} x {item.quantity} = ${item.price * item.quantity}
                            </div>
                        ))}
                    </div>
                    <div className="total">Total: ${totalPrice}</div>
                </div>
            )}

            
            <div className="product-card">
                <h3>EXO Keychain</h3>
                <p>Random member design</p>
                <div>$12</div>
                <button onClick={() => addToCart('EXO Keychain', 12)}>Buy Now</button>
            </div>

            <div className="product-card">
                <h3>BTS Album</h3>
                <p>Random member design</p>
                <div>$12</div>
                <button onClick={() => addToCart('BTS Album', 12)}>Buy Now</button>
            </div>

            <div className="product-card">
                <h3>BTS T-shirt</h3>
                <p>Random member design</p>                
                <div>$12</div>
                <button onClick={() => addToCart('BTS T-shirt', 12)}>Buy Now</button>
            </div>
        </div>
    );
}