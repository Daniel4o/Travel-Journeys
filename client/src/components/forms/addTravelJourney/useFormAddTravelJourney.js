import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function useFormAddTravelJourneys() {
    const BASE_URL = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    const [newJourney, setNewJourney] = useState({
        title: "",
        image: "",
        date: "",
        description: "",
    })

    const handleChange = (event) => {
        setNewJourney({ ...newJourney, [event.target.name]: event.target.value });
    }

    const handleImage = (event) => {
        setNewJourney({ ...newJourney, image: event.target.files[0] });
    }

    function submitHandler(event) {
        event.preventDefault();
        const enteretedTitle = newJourney.title;
        const enteredImage = newJourney.image;
        const enteredDate = newJourney.date;
        const enteredDescription = newJourney.description;

        const formData = new FormData();
        formData.append('title', enteretedTitle);
        formData.append('image', enteredImage);
        formData.append('date', enteredDate);
        formData.append('description', enteredDescription);

        fetch(`${BASE_URL}/travel-journeys`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(() => {
            navigate('/travel-journeys');
        })
    }

    return { submitHandler, newJourney, handleChange, handleImage }
}

export default useFormAddTravelJourneys;