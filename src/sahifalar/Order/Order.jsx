import React, { useState, useEffect } from 'react';
import './Order.css';
import { useInfoContext } from '../../context/authContext';
import { getCartItems } from '../../api/authRequest';

const Order = () => {
  const { currentUser } = useInfoContext();
  
  const [cartItems, setCartItems] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({
    address: '',
    house: '',
    entrance: '',
    floor: '',
    apartment: '',
    code: '',
    deliveryTime: 'asap',
    paymentMethod: 'cash',
    change: '',
    comment: ''
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems(currentUser.id);
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [currentUser.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleOrderSubmit = () => {
    // Handle order submission logic
    console.log('Order submitted', { cartItems, deliveryDetails });
  };

  return (
    <div className="cart-page">
      <h2>Ваш заказ</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>{item.size}</span>
            <span>{item.price} ₽</span>
            <span>
              <button>-</button>
              <span>{item.quantity}</span>
              <button>+</button>
            </span>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <span>Итог: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} ₽</span>
      </div>
      <div className="delivery-details">
        <h3>О вас</h3>
        <input type="text" name="name" placeholder="Имя" value={currentUser.name} readOnly />
        <input type="text" name="phone" placeholder="Номер телефона" value={currentUser.phone} readOnly />
        <input type="text" name="email" placeholder="Почта" value={currentUser.email} readOnly />
        <h3>Доставка</h3>
        <input type="text" name="address" placeholder="Адрес" value={deliveryDetails.address} onChange={handleChange} />
        <input type="text" name="house" placeholder="Дом" value={deliveryDetails.house} onChange={handleChange} />
        <input type="text" name="entrance" placeholder="Подъезд" value={deliveryDetails.entrance} onChange={handleChange} />
        <input type="text" name="floor" placeholder="Этаж" value={deliveryDetails.floor} onChange={handleChange} />
        <input type="text" name="apartment" placeholder="Квартира" value={deliveryDetails.apartment} onChange={handleChange} />
        <input type="text" name="code" placeholder="Код домофона" value={deliveryDetails.code} onChange={handleChange} />
        <h3>Время доставки</h3>
        <select name="deliveryTime" value={deliveryDetails.deliveryTime} onChange={handleChange}>
          <option value="asap">Как можно скорее</option>
          <option value="time">Выбрать время</option>
        </select>
        <h3>Оплата</h3>
        <select name="paymentMethod" value={deliveryDetails.paymentMethod} onChange={handleChange}>
          <option value="cash">Наличными</option>
          <option value="card">Картой</option>
        </select>
        <input type="text" name="change" placeholder="Сдача с" value={deliveryDetails.change} onChange={handleChange} />
        <textarea name="comment" placeholder="Комментарий к заказу" value={deliveryDetails.comment} onChange={handleChange}></textarea>
        <button onClick={handleOrderSubmit}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Order;
