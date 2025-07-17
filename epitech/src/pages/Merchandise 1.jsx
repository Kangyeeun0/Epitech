import React, { useState } from 'react';

import './Merchandise.css';

export default function Merchandise() {
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);


    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    
    
    const toggleCart = () => {
        setCartVisible(!cartVisible) 
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

    const removeFromCart = (name) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.name === name
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const Checkout = () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert(`Total: $${totalPrice}, click to redirect to payment page... `);
        setCartItems([]);
        setCartVisible(false);
        window.location.href="https://www.google.com"; 
        

    }



    return (
<div id="market">
    <button className="cart-icon" onClick={toggleCart}> 🛒CART </button>
    

    <div className="cart-icon-container">
        {cartVisible && (
            <div className="cart-box">
                <h3>Your Shopping Cart:</h3>
                <div>
                    {cartItems.map(item => (
                        <div key={item.name}>
                            {item.name} x {item.quantity} = ${item.price * item.quantity}   <button className="delete" onClick={() => removeFromCart(item.name)}>Delete</button>
                        </div>
                    ))}

                    <div className="total">Total: ${totalPrice}</div>

                    <div >
                        <button className="checkout" onClick={() => Checkout()}>CHECK OUT</button>
                    </div>
                </div>
            </div>
        )}
    </div>

    <div className='row'>
        <div className="column">
            <div className="product-card">
                <h3>Blackpink Album</h3>
                <p>Random member design</p>
                <div className="intro-img">
                    <p>
                        <img src="https://mimgnews.pstatic.net/image/109/2022/08/11/0004676420_001_20220811112804311.jpg?type=w540" height="200" align="center"></img>
                    </p>
                </div>
                <div>$12</div>
                <button onClick={() => addToCart('Blackpink Album', 12)}>Buy Now</button>
            </div>
        </div>

        <div className="column">
            <div className="product-card">
                <h3>BTS Album</h3>
                <p>Random member design</p>
                <div className="intro-img">
                    <p>
                        <img src="https://mimgnews.pstatic.net/image/109/2022/08/11/0004676420_001_20220811112804311.jpg?type=w540" height="200" align="center"></img>
                    </p>
                </div>
                <button onClick={() => addToCart('BTS Album', 12)}>Buy Now</button>
            </div>
        </div>

        <div className="column">
            <div className="product-card">
                <h3>TWICE Album</h3>
                <p>Random member design</p> 
                <div className="intro-img">
                    <p>
                        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi2%2F2212450633926%2FO1CN01BhlDa11es9hiadlxZ_%21%212212450633926.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1755346464&t=b1b3e3febc619b500b7f387231b19a06" height="200" align="center"></img>
                    </p>
                </div>               
                <div>$12</div>
                <button onClick={() => addToCart('TWICE Album', 12)}>Buy Now</button>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className="column">
            <div className="product-card">
                <h3>Blackpink Album</h3>
                <p>Random member design</p>
                <div className="intro-img">
                    <p>
                        <img src="https://mimgnews.pstatic.net/image/109/2022/08/11/0004676420_001_20220811112804311.jpg?type=w540" height="200" align="center"></img>
                    </p>
                </div>
                <div>$12</div>
                <button onClick={() => addToCart('Blackpink Album', 12)}>Buy Now</button>
            </div>
        </div>

        <div className="column">
            <div className="product-card">
                <h3>BTS Album</h3>
                <p>Random member design</p>
                <div className="intro-img">
                    <p>
                        <img src="https://mimgnews.pstatic.net/image/109/2022/08/11/0004676420_001_20220811112804311.jpg?type=w540" height="200" align="center"></img>
                    </p>
                </div>
                <div>$12</div>
                <button onClick={() => addToCart('BTS Album', 12)}>Buy Now</button>
            </div>
        </div>

        <div className="column">
            <div className="product-card">
                <h3>TWICE Album</h3>
                <p>Random member design</p>   
                <div className="intro-img">
                    <p>
                        <img src="https://mimgnews.pstatic.net/image/109/2022/08/11/0004676420_001_20220811112804311.jpg?type=w540" height="200" align="center"></img>
                    </p>
                </div>             
                <div>$12</div>
                <button onClick={() => addToCart('TWICE Album', 12)}>Buy Now</button>
            </div>
        </div>
    </div>
</div>
    ); 
    }
