import {useState, useEffect, } from 'react';

 const GetFavoritesForm =() => {
    const BASE_URL = process.env.REACT_APP_URL;
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/favorites`);
            return response.json()
                .then(data => {
                    setFavorites(data);
                    setError(null);
                    setIsLoading(false);

                })
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }, [BASE_URL]);

        const favoritesLength = favorites.filter(favorite=>favorite._id).length;
        
    return {favorites, isLoading, error, favoritesLength };
}

export default GetFavoritesForm;