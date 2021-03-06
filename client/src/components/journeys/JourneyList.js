import JourneyItem from './JourneyItem';
import classes from './JourneyList.module.css';

function JourneyList(props) {

    return (
        <ul className={classes.list}>
            {props.travelJourneys.map((journey) => {
                return (
                    <JourneyItem
                        key={journey._id}
                        _id={journey._id}
                        image={journey.image}
                        title={journey.title}
                        date={journey.date}
                        description={journey.description}
                        delete={props.deleteJourney}
                        Todo={props.Todo}
                    />
                )
            })}
        </ul>
    )
}

export default JourneyList;