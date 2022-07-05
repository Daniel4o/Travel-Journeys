import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import JourneyList from "../components/journeys/JourneyList";

function FavoriteTravelJourneys() {
    const favoritesContext = useContext(FavoritesContext);
    let content;
    if (favoritesContext.totalFavorites === 0) {
        content = <p>You got no favorites yet.</p>
    }
    else {
        content = <JourneyList travelJourneys={favoritesContext.favorites} />
    }

    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    )
}

export default FavoriteTravelJourneys;