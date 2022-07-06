import { useEffect, useState } from "react";

function AddFavoriteForm(props) {
    const BASE_URL = process.env.REACT_APP_URL;

    const [favorited, setFavorited] = useState(false);
    const favorite = {
        id: props.values._id,
        title: props.values.title,
        image: props.values.image,
        date: props.values.date,
        description: props.values.description
    }

    useEffect(() => {
        fetch(`${BASE_URL}/favorites/favorited`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(favorite)
        }).then((response) => {
            
            console.log(response)
            setFavorited(response.data.favorited);
        })
            .catch((error) => {
                console.log(error);
            })
    }, [BASE_URL]);

    const onClickFavorite = () => {
        console.log(favorited)
        if (favorited) {
            fetch(`${BASE_URL}/favorites/removeFromFavorites`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(favorite)
            }).then(() => {
                setFavorited(!favorited);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
        
        else {
            fetch(`${BASE_URL}/favorites/addToFavorites`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(favorite)
            }).then(() => {
                setFavorited(!favorited);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <div>
            <button onClick={onClickFavorite}>{favorited ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>
    )
}

export default AddFavoriteForm;