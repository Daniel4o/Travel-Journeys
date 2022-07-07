import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import JourneyList from "../components/journeys/JourneyList";
import GetFavoritesForm from "../components/forms/favorites/GetFavoritesForm";

function FavoriteTravelJourneys() {
    const {favorites, isLoading, error} = GetFavoritesForm();
    console.log(favorites)
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <section>
            <h1>My favorites</h1>
            <JourneyList travelJourneys={favorites} />
        </section>
    )
}

export default FavoriteTravelJourneys;