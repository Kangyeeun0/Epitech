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
        window.location.href="https://www.ktown4u.com/"; 
        

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
                        <div class="intro-img">
                            <p>
                                <img src="https://mimgnews.pstatic.net/image/109/2022/08/11/0004676420_001_20220811112804311.jpg?type=w540" height="200" align="center"></img>
                            </p>
                        </div>
                        <div>$20</div>
                        <button onClick={() => addToCart('BLACKPINK Album', 12)}>Buy Now</button>
                    </div>
                </div>

                <div className="column">
                    <div className="product-card">
                        <h3>BTS Album</h3>
                        <p>Random member design</p>
                        <div className="intro-img">
                    <p>
                        <img src="https://tva1.sinaimg.cn/crop.0.0.996.996.1024/decc8b91jw8f8ohrxdzjsj20ro0ro0u0.jpg?KID=imgbed,tva&Expires=1598577611&ssig=k0GidoCiqC" height="200" align="center"></img>
                    </p>
                    </div>
                        <div>$18</div>
                        <button onClick={() => addToCart('BTS Album', 18)}>Add To Cart</button>
                    </div>
                </div>

                <div className="column">
                    <div className="product-card">
                        <h3>SEVENTEEN Album</h3>
                        <p>Random member design</p>   
                          <div class="intro-img">
                            <p>
                                <img src="https://t15.baidu.com/it/u=729942305,4201778155&fm=224&app=112&f=JPEG?w=500&h=500" height="200" align="center"></img>s
                            </p>
                        </div>             
                        <div>$17</div>
                        <button onClick={() => addToCart('SEVENTEEN Album', 17)}>Add To Cart</button>
                    </div>
                </div>
            </div>

        <div className='row'>
                <div className="column">
                    <div className="product-card">
                        <h3>TXT Album</h3>
                        <p>Random member design</p>
                          <div class="intro-img">
                            <p>
                                <img src="https://img14.360buyimg.com/pop/jfs/t1/139739/32/32957/20998/639d8f2eE7c29485c/34c511fef630612f.png" height="200" align="center"></img>
                            </p>
                        </div>
                        <div>$15</div>
                        <button onClick={() => addToCart('TXT Album', 15)}>Add To Cart</button>
                    </div>
                </div>

                <div className="column">
                    <div className="product-card">
                        <h3>RED VELVET Album</h3>
                        <p>Random member design</p>
                          <div class="intro-img">
                            <p>
                                <img src="https://q5.itc.cn/q_70/images01/20240726/2f5e6b5ca3a54e5fa8a0a35bae4669d7.jpeg" height="200" align="center"></img>
                            </p>
                        </div>
                        <div>$19</div>
                        <button onClick={() => addToCart('REDVELVET Album', 19)}>Add To Cart</button>
                    </div>
                </div>

                <div className="column">
                    <div className="product-card">
                        <h3>TWICE Album</h3>
                        <p>Random member design</p>     
                          <div class="intro-img">
                            <p>
                                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi2%2F2212450633926%2FO1CN01BhlDa11es9hiadlxZ_%21%212212450633926.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1755346464&t=b1b3e3febc619b500b7f387231b19a06" height="200" align="center"></img>
                            </p>
                        </div>           
                        <div>$12</div>
                        <button onClick={() => addToCart('TWICE Album', 12)}>Add To Cart</button>
                    </div>
                </div>
            </div>
              <div className='row'>
                <div className="column">
                    <div className="product-card">
                        <h3>AESPA Album</h3>
                        <p>Random member design</p>
                          <div class="intro-img">
                            <p>
                                <img src="https://img2.baidu.com/it/u=414583694,3088417929&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1150" height="200" align="center"></img>
                            </p>
                        </div>
                        <div>$18</div>
                        <button onClick={() => addToCart('AESPA Album', 18)}>Add To Cart</button>
                    </div>
                </div>

                <div className="column">
                    <div className="product-card">
                        <h3>EXO Album</h3>
                        <p>Random member design</p>
                          <div class="intro-img">
                            <p>
                                <img src="https://t13.baidu.com/it/u=660522925,2305687809&fm=224&app=112&f=JPEG?w=473&h=500" height="200" align="center"></img>
                            </p>
                        </div>
                        <div>$16</div>
                        <button onClick={() => addToCart('EXO Album', 16)}>Add To Cart</button>
                    </div>
                </div>

                <div className="column">
                    <div className="product-card">
                        <h3>RIIZE Album</h3>
                        <p>Random member design</p>     
                          <div class="intro-img">
                            <p>
                                <img src="https://b0.bdstatic.com/c0dad7c981907ee832b4d6b6951075c1.jpg" height="200" align="center"></img>
                            </p>
                        </div>           
                        <div>$17</div>
                        <button onClick={() => addToCart('RIIZE Album', 17)}>Add To Cart</button>
                    </div>
                </div>
            </div>


        </div>
    ); 
    }
