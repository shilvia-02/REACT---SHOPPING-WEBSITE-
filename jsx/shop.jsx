import React, { useState } from 'react'; 
import './Shop.css';
import item1 from '../Image/item1.jpeg';
import item2 from '../Image/item2.webp';
import item3 from '../Image/item3.jpg';
import item4 from '../Image/item4.jpeg';
import item5 from '../Image/item5.jpg';
import item6 from '../Image/item6.jpg';

const Shop = () => {
    const [cart, setCart] = useState([]);  // Cart state to store selected items

    const items = [
        { id: 1, name: 'Stunning Bridal Diamond Necklace Set', price: 280470, image: item1 },
        { id: 2, name: 'Gorgeous And Beautiful Bridal Diamond Necklace', price: 690345, image: item2 },
        { id: 3, name: 'Kundan Jewellery & Necklace Designs', price: 489209, image: item3 },
        { id: 4, name: 'Breathtaking Antique Jewellery Designs', price: 378498, image: item4 },
        { id: 5, name: 'Diamond Necklace', price: 450879, image: item5 },
        { id: 6, name: 'Traditional Gold Jewelry Necklace', price: 569290, image: item6 },
    ];

    const addToCart = (item) => {
        setCart([...cart, item]);  // Add item to the cart state
        alert(`${item.name} added to cart!`); 
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);  // Calculate total price
    };

    return (
        <div>
            <div className="shop">
                <div className="box">
                    {items.map(item => (
                        <div className="box1" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name} ..${item.price.toFixed(2)}</p>
                            <button onClick={() => addToCart(item)}>Buy</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cart">
                <h2>Cart Items:</h2>
                {cart.length > 0 ? (
                    cart.map(item => (
                        <div key={item.id}>
                            <p>{item.name} - ${item.price.toFixed(2)}</p>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div className="total">
                <h2>Total: ${calculateTotal().toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default Shop;
