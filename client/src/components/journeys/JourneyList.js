import JourneyItem from './JourneyItem';
import classes from './JourneyList.module.css';

function JourneyList(props) {
    console.log(props.travelJourneys.map(a=>a.date.substring(0,10).split("-").reverse().join("-")))
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
                    />
                )
            })}
        </ul>
    )
}

export default JourneyList;