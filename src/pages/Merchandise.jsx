import React from 'react';

export default function Merchandise() {
    return (
        <div id="market" className="tab-content">
            <div className="marketplace">
                {/* Product 1 */}
                <div className="product-card">
                    <div
                        className="product-img"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1578946928905-8c9b1a1a6c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80')",
                        }}
                    ></div>
                    <div className="product-info">
                        <h3>BTS Official Lightstick</h3>
                        <p>Authentic ARMY BOMB with Bluetooth connectivity and color synchronization</p>
                        <div className="product-price">$45</div>
                        <div className="product-actions">
                            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                                Details
                            </button>
                            <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="product-card">
                    <div
                        className="product-img"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1592402848343-019f403a1e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80')",
                        }}
                    ></div>
                    <div className="product-info">
                        <h3>BLACKPINK Signed Album</h3>
                        <p>Limited edition signed "THE ALBUM" with certificate of authenticity</p>
                        <div className="product-price">$85</div>
                        <div className="product-actions">
                            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                                Details
                            </button>
                            <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="product-card">
                    <div
                        className="product-img"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80')",
                        }}
                    ></div>
                    <div className="product-info">
                        <h3>TWICE Official Poster Set</h3>
                        <p>Includes individual posters of all 9 members and a group poster</p>
                        <div className="product-price">$22</div>
                        <div className="product-actions">
                            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                                Details
                            </button>
                            <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="product-card">
                    <div
                        className="product-img"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80')",
                        }}
                    ></div>
                    <div className="product-info">
                        <h3>EXO Official Keychain</h3>
                        <p>Random member design, high-quality metal material</p>
                        <div className="product-price">$12</div>
                        <div className="product-actions">
                            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                                Details
                            </button>
                            <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
