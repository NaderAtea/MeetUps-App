import NewMeeyup from "./Pages/NewMeetup";
import AllMeetups from "./Pages/AllMeetups";
import Favorites from "./Pages/Favorites";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-Meetup">
          <NewMeeyup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
