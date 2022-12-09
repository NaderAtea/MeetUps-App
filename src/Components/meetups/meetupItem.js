import Card from "../UI/Card";
import classes from "./meetupitem.module.css";
import FavoritesContext from "../../Store/favorites-context";
import { useContext } from "react";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorites(props.id);
  const toggleFavoritesHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img alt={props.title} src={props.image} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesHandler}>
            {itemIsFavorite ? "remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
