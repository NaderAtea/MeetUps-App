import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../Components/meetups/NewMeetupForm";
const NewMeeyup = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-http-559d9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "content-type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h2>Add New Meetup </h2>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeeyup;
