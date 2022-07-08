import { useEffect, useState } from "react";

function AddFavoriteForm(props) {
    const BASE_URL = process.env.REACT_APP_URL;

    const [favorited, setFavorited] = useState([]);
    const [isFavorited, setIsFavorited] = useState(false);
    const [favoriteNumber, setFavoriteNumber] = useState([]);
    const favorite = {
        _id: props.values._id,
        title: props.values.title,
        image: props.values.image,
        date: props.values.date,
        description: props.values.description
    }

    useEffect(async() => {
        const response = await fetch(`${BASE_URL}/favorites`)        
        return response.json()
        .then((data) => {
            setFavorited(data);   
            
            const isFavorite = data.map(isFavorited=>isFavorited._id ).flat();
            if(isFavorite.indexOf(favorite._id) >-1) setIsFavorited(true);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [BASE_URL]);
    
    const onClickFavorite =  () => {
            const isFavorite = favorited.find(isFavorited=>isFavorited._id === favorite._id);
            if(isFavorite) {
            fetch(`${BASE_URL}/favorites/${favorite._id}`, {
                method: "DELETE"
            }).then(() => {
                setIsFavorited(!isFavorited);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    
        
        else {
            fetch(`${BASE_URL}/favorites`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(favorite)
            }).then(() => {
                setIsFavorited(!isFavorited);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <div>
            {favoriteNumber}
            <button onClick={onClickFavorite}>{isFavorited ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>
    )
}

export default AddFavoriteForm;