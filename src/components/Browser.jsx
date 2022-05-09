//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";
import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";

//Project files

export default function Browser({ isLogged }) {
  return (
    <BrowserRouter>
      <Switch>{isLogged ? <Logged /> : <UnLogged />}</Switch>
    </BrowserRouter>
  );
}
