import TravelJourneysForm from "../components/forms/TravelJourneysForm";
import JourneyList from "../components/journeys/JourneyList";

function AllTravelJourneys() {
    const { travelJourneys, isLoading, error } = TravelJourneysForm();

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <section>
            <h1>All Travel Journeys</h1>
            <JourneyList travelJourneys={travelJourneys} />
        </section>
    )
}

export default AllTravelJourneys;