import React from 'react';

import { connect } from 'react-redux';
import { addItem, clearItem, removeItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: {id, imageUrl, name, quantity, price}, addItem, clearItem, removeItem }) => {
  const item = {id, imageUrl, name, quantity, price};
  return (
    <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={ imageUrl }/>
    </div>
    <span className="name">{ name }</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
      <span className="value">{ quantity }</span>
      <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
    </span>
    <span className="price">{ price }</span>
    <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);