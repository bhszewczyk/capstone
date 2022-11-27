import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';

function CartItem({ item }) {
	const { removeImageFromCart } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);

	const binIconClass = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';
	return (
		<div className='cart-item'>
			<i
				className={binIconClass}
				onClick={() => removeImageFromCart(item)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			></i>
			<img src={item.url} alt='Product' width='130px' />
			<p>$5.99</p>
		</div>
	);
}

CartItem.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}),
};

export default CartItem;
