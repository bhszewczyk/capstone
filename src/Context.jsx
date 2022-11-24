import { createContext, useEffect, useState } from 'react';

const Context = createContext();

const URL_PHOTOS =
	'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

function ContextProvider({ children }) {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch(URL_PHOTOS)
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	return <Context.Provider value={{ photos }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
