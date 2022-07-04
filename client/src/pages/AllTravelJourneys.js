import useFormTravelJourneys from "../components/forms/useFormTravelJourneys";
import JourneyList from "../components/journeys/JourneyList";

function AllTravelJourneys() {
    const { travelJourneys } = useFormTravelJourneys();
    return (
        <section>
            <h1>All Travel Journeys</h1>
            <JourneyList travelJourneys={travelJourneys} />
        </section>
    )
}

export default AllTravelJourneys;