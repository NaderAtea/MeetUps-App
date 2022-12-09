import classes from "./NewMeetupForm.module.css";
import Card from "../UI/Card";
import { useRef } from "react";
const NewMeetUpForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredimage = imageInputRef.current.value;
    const enteredaddress = adressInputRef.current.value;
    const entereddescription = descriptionInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredimage,
      address: enteredaddress,
      description: entereddescription,
    };
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type={"text"} required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type={"url"} required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type={"text"} required id="address" ref={adressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetUpForm;
