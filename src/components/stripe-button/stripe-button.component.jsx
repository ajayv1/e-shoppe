import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_GvR31anEaOkHOw7mJMUyktEL003mbm03zn';
  
  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="E-Shoppe Ltd"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;