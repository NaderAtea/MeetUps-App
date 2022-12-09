import { useEffect, useState } from "react";
import MeetupList from "../Components/meetups/meetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-http-559d9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetup(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading.......</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
};
export default AllMeetups;
