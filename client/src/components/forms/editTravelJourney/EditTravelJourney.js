import useFormEditTravelJourney from "./useFormEditTravelJourney";
import classes from '../addTravelJourney/AddTravelJourneyForm.module.css';
import Card from "../../ui/Card";

const EditTravelJourney = () => {
    const { initialValues, error, isLoading, submitHandler, titleInputRef, imageInputRef, dateInputRef, descriptionInputRef } = useFormEditTravelJourney();

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>There was an error: {error}</h2>
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Journey Title</label>
                    <input defaultValue={initialValues.title} type='text' required id='title' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Journey Image</label>
                    <input defaultValue={initialValues.image} type='url' required id='image'  />
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Journey Date</label>
                    <input defaultValue={initialValues.date} type='date' required id='date'  />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Journey Description</label>
                    <textarea defaultValue={initialValues.description} type='text' required id='description' rows='5' ></textarea>
                </div>
                <div className={classes.actions}>
                    <a className={classes.a} href="/travel-journeys">Cancel</a>
                    <button>Edit Journey</button>
                </div>
            </form>
        </Card>
    )
}

export default EditTravelJourney;