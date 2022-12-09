import { useContext } from "react";
import MeetupList from "../Components/meetups/meetupList";
import FavoritesContext from "../Store/favorites-context";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalfavorites === 0) {
    content = <p>You Got No Favorites Yet You Can Add Some.</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
};
export default Favorites;
