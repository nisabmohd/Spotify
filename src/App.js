import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Leftbar from './Leftbar'
import Playbar from './Playbar'
import Page from './Page'
import Search from './Search';
import LikedSongs from './Liked';
import Library from "./Library";
import Playlist from "./Playlist";
function App() {
  return (
    <Router>
      <div className="container">
        <Leftbar />
        <Switch>
          <Route exact path="/Spotify">
            <Page />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/playlist">
            <Playlist />
          </Route>
          <Route exact path="/liked">
            <LikedSongs />
          </Route>
        </Switch>
        <Playbar />
      </div>
    </Router>
  )
}

export default App;
