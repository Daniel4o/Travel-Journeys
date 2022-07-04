import { useState, useEffect } from "react";

const TravelJourneysForm = () => {
    const BASE_URL = process.env.REACT_APP_URL;
    const [travelJourneys, setTravelJourneys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(async () => {
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
    }, [BASE_URL]);

    return { travelJourneys, isLoading, error };
}

export default TravelJourneysForm;
