import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RegisterInvestor from "./pages/RegisterInvestor";
import RegisterUmkm from "./pages/RegisterUmkm";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Pendanaan from "./pages/Pendanaan";
import PendanaanDetail from "./pages/PendanaanDetail";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pendanaan" exact component={Pendanaan} />
        <Route path="/pendanaan/detail/:id" exact component={PendanaanDetail} />
        <Route path="/kontak" exact component={Contact} />
        <Route path="/masuk" exact component={Login} />
        <Route path="/daftar/investor" exact component={RegisterInvestor} />
        <Route path="/daftar/umkm" exact component={RegisterUmkm} />
      </Switch>
    </Router>
  );
}

export default App;
