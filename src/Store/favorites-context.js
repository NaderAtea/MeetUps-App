import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalfavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetup) => {},
  itemIsFavorites: (meetup) => {},
});
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  const AddFavoritesHandler = (favoriteMeetup) => {
    setUserFavorites((prevuserFavorites) => {
      return prevuserFavorites.concat(favoriteMeetup);
    });
  };
  const removeFavoritesHandler = (meetupId) => {
    setUserFavorites((prevuserFavorites) => {
      return prevuserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemIsFavoritesHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalfavorites: userFavorites.length,
    addFavorites: AddFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemIsFavorites: itemIsFavoritesHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
