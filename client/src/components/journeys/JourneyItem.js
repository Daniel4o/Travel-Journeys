import Card from '../ui/Card';
import classes from './JourneyItem.module.css';
import AddFavoriteForm from '../forms/favorites/AddFavoriteForm';
import EditTravelJourney from '../forms/editTravelJourney/EditTravelJourney';

function JourneyItem(props) {
    const Todo = props.Todo;

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
                    <AddFavoriteForm values={props} />
                    <a href={`travel-journeys/${props._id}`}>Edit</a>
                    <Todo delete={() => props.delete(props._id)}></Todo>
                </div>
            </Card>
        </li>
    )
}

export default JourneyItem;