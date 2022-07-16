import useFormTravelJourney from './useFormAddTravelJourney.js';
import Card from '../../ui/Card';
import classes from './AddTravelJourneyForm.module.css';


function AddTravelJourneyForm() {
    const { submitHandler, newJourney, handleChange, handleImage} = useFormTravelJourney();

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler} encType="multipart/form-data">
                <div className={classes.control}>
                    <label htmlFor='title'>Journey Title</label>
                    <input type='text' value={newJourney.title} name="title" required id='title' onChange={handleChange} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Journey Image</label>
                    <input type='file' name="image" accept=".png, .jpg, .jpeg" required id='image' onChange={handleImage} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Journey Date</label>
                    <input type='date' value={newJourney.date} name="date" required id='date' onChange={handleChange} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Journey Description</label>
                    <textarea type='text' value={newJourney.description} name="description" required id='description' rows='5' onChange={handleChange}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Journey</button>
                    <div></div>
                    <a href="/travel-journeys"><button type="button">Cancel</button></a>
                </div>
            </form>
        </Card>
    )
}

export default AddTravelJourneyForm;