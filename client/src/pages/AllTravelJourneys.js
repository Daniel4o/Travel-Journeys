import TravelJourneysForm from "../components/forms/travelJourney/TravelJourneysForm";
import JourneyList from "../components/journeys/JourneyList";
import Todo from "../components/dialog/Todo";

function AllTravelJourneys() {
    const { travelJourneys, deleteTravelJourney, isLoading, error } = TravelJourneysForm();

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>There was an error: {error}</h2>
    }

    return (
        <section>
            <h1>All Travel Journeys</h1>
            <JourneyList
                travelJourneys={travelJourneys}
                deleteJourney={deleteTravelJourney}
                Todo={Todo}
            />
        </section>
    )
}


export default AllTravelJourneys;