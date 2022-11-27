import { createContext, useEffect, useState } from 'react';

const Context = createContext();

const URL_PHOTOS =
	'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

function ContextProvider({ children }) {
	const [photos, setPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetch(URL_PHOTOS)
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	const toggleFavorite = (id) => {
		setPhotos((oldState) => {
			const updatedPhotos = [...oldState].map((image) => {
				if (image.id === id) {
					return {
						...image,
						isFavorite: !image.isFavorite,
					};
				} else {
					return image;
				}
			});

			return updatedPhotos;
		});
	};

	const addImageToCart = (image) => {
		const itemToAdd = image;

		setCartItems((previousCart) => [...previousCart, itemToAdd]);
	};

	const removeImageFromCart = (image) => {
		const cart = [...cartItems];

		const updatedCart = cart.filter((photo) => image.id !== photo.id);

		setCartItems(updatedCart);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<Context.Provider
			value={{
				photos,
				toggleFavorite,
				cartItems,
				addImageToCart,
				removeImageFromCart,
				clearCart,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, ContextProvider };
