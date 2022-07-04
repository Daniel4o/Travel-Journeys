import useFormTravelJourneys from './useFormAddTravelJourney';
import Card from '../ui/Card';
import classes from './AddTravelJourneyForm.module.css';


function AddTravelJourneyForm() {
    const { submitHandler, titleInputRef, imageInputRef, dateInputRef, descriptionInputRef } = useFormTravelJourneys();

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Journey Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Journey Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Journey Date</label>
                    <input type='date' required id='date' ref={dateInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Journey Description</label>
                    <textarea type='text' required id='description' rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Journey</button>
                </div>
            </form>
        </Card>
    )
}

export default AddTravelJourneyForm;