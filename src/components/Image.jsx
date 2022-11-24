import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

function Image({ className, image }) {
	const [isHovered, setIsHovered] = useState(false);
	const { toggleFavorite } = useContext(Context);

	const heartClass = image.isFavorite
		? 'ri-heart-fill favorite'
		: 'ri-heart-line favorite';

	return (
		<div
			className={`${className} image-container`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={image.url} className='image-grid' />
			{isHovered && (
				<i className={heartClass} onClick={() => toggleFavorite(image.id)}></i>
			)}
			{!isHovered && image.isFavorite && (
				<i className={heartClass} onClick={() => toggleFavorite(image.id)}></i>
			)}
			{isHovered && <i className='ri-add-circle-line cart'></i>}
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
