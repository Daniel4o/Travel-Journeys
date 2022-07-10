import { useNavigate,  } from "react-router-dom";
import { useRef, useState } from 'react';

function useFormAddTravelJourneys() {
    const BASE_URL = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const dateInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteretedTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const journeyData = {
            title: enteretedTitle,
            image: enteredImage,
            date: enteredDate,
            description: enteredDescription
        }
        
        fetch(`${BASE_URL}/travel-journeys`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(journeyData)
        }).then(() => {
            navigate('/travel-journeys');
        })
    }

    return { submitHandler, titleInputRef, imageInputRef, dateInputRef, descriptionInputRef }
}

export default useFormAddTravelJourneys;