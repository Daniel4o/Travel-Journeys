import Card from '../ui/Card';
import classes from './JourneyItem.module.css';
import AddFavoriteForm from '../forms/favorites/AddFavoriteForm';

function JourneyItem(props) {
console.log(props._id)
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
                   <AddFavoriteForm values={props}/>
                    <button onClick={() =>props.deleteJourney(props._id)}>Delete</button>
                </div>
            </Card>
        </li>
    )
}

export default JourneyItem;