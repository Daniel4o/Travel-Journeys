import TravelJourneysForm from "../components/forms/travelJourney/TravelJourneysForm";
import JourneyList from "../components/journeys/JourneyList";

function AllTravelJourneys() {
    const { travelJourneys, deleteTravelJourney, isLoading, error } = TravelJourneysForm();

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <section>
            <h1>All Travel Journeys</h1>
            <JourneyList travelJourneys={travelJourneys} deleteJourney={deleteTravelJourney} />
        </section>
    )
}

export default AllTravelJourneys;