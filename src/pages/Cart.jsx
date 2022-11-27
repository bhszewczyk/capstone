import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
	const { cartItems, clearCart } = useContext(Context);
	const [isCheckout, setIsCheckout] = useState(false);

	const cartItemsElements = cartItems.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	const totalCost = 5.99 * cartItems.length;

	const orderItems = () => {
		setIsCheckout(true);
		setTimeout(() => {
			setIsCheckout(false);
			console.log('Order placed!');
			clearCart();
		}, 3000);
	};

	return (
		<main className='cart-page'>
			<h1>Check out</h1>
			{cartItemsElements}
			<p className='total-cost'>
				Total:{' '}
				{totalCost.toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
			</p>
			<div className='order-button'>
				{cartItems.length > 0 && (
					<button onClick={orderItems}>
						{isCheckout ? 'Ordering...' : 'Place Order'}
					</button>
				)}
			</div>
		</main>
	);
}

export default Cart;
