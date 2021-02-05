import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Search from "./pages/search/search.page";
import Saved from "./pages/saved/saved.page";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
