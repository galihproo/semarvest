import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
          }

          .btn-primary {
            background-color: #0071BC;
            color: #fff;
            font-weight: bold;
            border-radius: 12px;
          }
        `}
      </style>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/kontak" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
