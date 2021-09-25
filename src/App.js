import "./App.css";
import Login from "./pages/Login";
import MacBook from "./pages/MacBook";
import Menu from "./pages/Menu";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/login" exact component={Login} />
        <Route path="/details" exact component={MacBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
