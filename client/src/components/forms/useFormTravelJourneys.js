import { useState, useEffect } from "react";

const useFormTravelJourneys = () => {
    const BASE_URL = process.env.REACT_APP_URL;

    const [travelJourneys, setTravelJourneys] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/travel-journeys`);
            return response.json()
                .then(data => {
                    setTravelJourneys(data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [BASE_URL]);

    return { travelJourneys };
}

export default useFormTravelJourneys;
