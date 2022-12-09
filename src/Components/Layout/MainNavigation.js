import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../Store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={"/"}>AllMeetups</NavLink>
          </li>
          <li>
            <NavLink to={"/new-Meetup"}>Add NewMeetup</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalfavorites}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
