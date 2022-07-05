import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteJourney) => { },
    removeFavorite: (journeyId) => { },
    itemIsFavorite: (journeyId) => { }
});

export function FavoritesContextProvider(props) {
    const [favorites, setFavorites] = useState([]);
    
    function addFavoriteHandler(favoriteJourney) {
        setFavorites((prevFavorites) => {
            return prevFavorites.concat(favoriteJourney);
        });
    }

    function removeFavoriteHandler(journeyId) {
        setFavorites(prevFavorites => {
            return prevFavorites.filter(journey => journey._id !== journeyId);
        });
    }

    function itemIsFavoriteHandler(journeyId) {
        return favorites.some(journey => journey._id === journeyId);
    }
    
    const context = {
        favorites: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;