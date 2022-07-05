import { useContext } from 'react';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';
import classes from './JourneyItem.module.css';

function JourneyItem(props) {
    const favoritesContext = useContext(FavoritesContext);
    const itemIsFavorite = favoritesContext.itemIsFavorite(props._id);
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props._id);
        }
        else {
            favoritesContext.addFavorite({
                _id: props._id,
                title: props.title,
                image: props.image,
                date: props.date,
                description: props.description
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <div>{props.date}</div>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? "Remove from Favorites" : "To favorites"}
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default JourneyItem;