import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useFormEditTravelJourney = () => {
    const BASE_URL = process.env.REACT_APP_URL;
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const dateInputRef = useRef();
    const descriptionInputRef = useRef();

    const [travelJourney, setTravelJourney] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTravelJourney = async () => {
            try {
                const response = await fetch(`${BASE_URL}/travel-journeys/${id}`);
                return response.json()
                    .then(data => {
                        setTravelJourney(data);
                        setError(null);
                        setIsLoading(false)
                    })
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        getTravelJourney();
    }, [BASE_URL])

    const initialValues = {
        title: travelJourney.title,
        image: travelJourney.image,
        date: travelJourney.date,
        description: travelJourney.description
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(event.target)
        const enteretedTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const data = {
            title: enteretedTitle,
            image: enteredImage,
            date: enteredDate,
            description: enteredDescription
        }
        console.log(id)
            fetch(`${BASE_URL}/travel-journeys/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                navigate('/travel-journeys');
            })
        }

        return { isLoading, error, initialValues, submitHandler }

    }

    export default useFormEditTravelJourney;