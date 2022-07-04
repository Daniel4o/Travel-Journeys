import JourneyItem from './JourneyItem';
import classes from './JourneyList.module.css';

function JourneyList(props) {
    return (
        <ul className={classes.list}>
            {props.travelJourneys.map((journey) => {
               return (
                <li className={classes.item}>
                    <div className={classes.image}>
                        <img src={journey.image} alt={journey.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{journey.title}</h3>
                        <p>{journey.description}</p>
                        <div>{journey.date}</div>
                    </div>
                    <div className={classes.actions}>
                        <button>To Favorites</button>
                    </div>
                </li>
            )
            })}
        </ul>
    )
}

export default JourneyList;