import { useState, useEffect } from "react";

const TravelJourneysForm = () => {
    const BASE_URL = process.env.REACT_APP_URL;

    const [travelJourneys, setTravelJourneys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const getTravelJourneys = async () => {
        try {
            const response = await fetch(`${BASE_URL}/travel-journeys`);
            return response.json()
                .then(data => {
                    setTravelJourneys(data)
                    setError(null);
                    setIsLoading(false);
                })
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }
    getTravelJourneys();
    }, [BASE_URL]);

    const deleteTravelJourney = async (id) => {
        try {
            if(window.confirm("Are you sure you want to delete this travel journey?")){
            await fetch(`${BASE_URL}/favorites/${id}`, {
                method: "DELETE",
            })
                .then(() => {
                     fetch(`${BASE_URL}/travel-journeys/${id}`, {
                        method: "DELETE"
                    })
                }).then(response => {
                    setTravelJourneys(travelJourneys.filter(journey=>journey._id !== id));
                    return response.json();
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return { travelJourneys, deleteTravelJourney, isLoading, error };
}

export default TravelJourneysForm;
