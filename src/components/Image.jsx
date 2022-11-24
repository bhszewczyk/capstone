import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

function Image({ className, image }) {
	const [isHovered, setIsHovered] = useState(false);
	const { toggleFavorite, cartItems, addImageToCart, removeImageFromCart } =
		useContext(Context);

	const heartClass = image.isFavorite
		? 'ri-heart-fill favorite'
		: 'ri-heart-line favorite';

	function getCartIcon() {
		const foundItem = cartItems.find((item) => {
			return item.id === image.id;
		});

		if (foundItem) {
			return (
				<i
					className='ri-shopping-cart-fill cart'
					onClick={() => removeImageFromCart(image)}
				></i>
			);
		} else if (isHovered) {
			return (
				<i
					className='ri-add-circle-line cart'
					onClick={() => addImageToCart(image)}
				></i>
			);
		}
	}

	return (
		<div
			className={`${className} image-container`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={image.url} className='image-grid' />
			{isHovered || (!isHovered && image.isFavorite) ? (
				<i className={heartClass} onClick={() => toggleFavorite(image.id)}></i>
			) : (
				''
			)}
			{getCartIcon()}
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	image: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool,
	}),
};

export default Image;
