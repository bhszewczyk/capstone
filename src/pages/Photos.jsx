import React, { useContext } from 'react';
import Image from '../components/Image';
import { Context } from '../Context';
import { getClass } from '../utils/getClass';

function Photos() {
	const { photos } = useContext(Context);

	const photoElements = photos.map((photo, index) => {
		return <Image image={photo} key={photo.id} className={getClass(index)} />;
	});

	return <main className='photos'>{photoElements}</main>;
}

export default Photos;
