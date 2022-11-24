import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

function Image({ className, image }) {
	const [isHovered, setIsHovered] = useState(false);
	const { toggleFavorite, cartItems, addImageToCart } = useContext(Context);

	const heartClass = image.isFavorite
		? 'ri-heart-fill favorite'
		: 'ri-heart-line favorite';

	const foundItem = cartItems.find((item) => {
		return item.id === image.id;
	});

	const cartClass = foundItem
		? 'ri-shopping-cart-fill cart'
		: 'ri-add-circle-line cart';

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
			{isHovered || (!isHovered && foundItem) ? (
				<i className={cartClass} onClick={() => addImageToCart(image)}></i>
			) : (
				''
			)}
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
