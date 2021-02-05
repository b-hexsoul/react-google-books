import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Search from "./pages/search/search.page";
import Saved from "./pages/saved/saved.page";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  );
}

export default App;
