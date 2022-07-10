import JourneyList from "../components/journeys/JourneyList";
import GetFavoritesForm from "../components/forms/favorites/GetFavoritesForm";

function FavoriteTravelJourneys() {
    const {favorites, isLoading, error} = GetFavoritesForm();

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>There was an error: {error}</h2>
    }

    return (
        <section>
            <h1>My favorites</h1>
            <JourneyList travelJourneys={favorites} />
        </section>
    )
}

export default FavoriteTravelJourneys;