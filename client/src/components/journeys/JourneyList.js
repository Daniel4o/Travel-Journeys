import JourneyItem from './JourneyItem';
import classes from './JourneyList.module.css';

function JourneyList(props) {
    return (
        <ul className={classes.list}>
            {props.travelJourneys.map((journey) => {
                return (
                    <JourneyItem
                        key={journey._id}
                        id={journey._id}
                        image={journey.image}
                        title={journey.title}
                        date={journey.date.substring(0, 10).split('-').reverse().join("-")}
                        description={journey.description}
                    />
                )
            })}
        </ul>
    )
}

export default JourneyList;