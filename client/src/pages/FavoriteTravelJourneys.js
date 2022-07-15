import JourneyList from "../components/journeys/JourneyList";
import GetFavoritesForm from "../components/forms/favorites/GetFavoritesForm";

function FavoriteTravelJourneys() {
    const {favorites, isLoading, error} = GetFavoritesForm();
    console.log(favorites)
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
            {favorites.length === 0 ? <h2>No Travel Journeys</h2> : null}
        </section>
    )
}

export default FavoriteTravelJourneys;