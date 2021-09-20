import React from "react";

import HeaderComponent from "./components/header/header.component";
import JumbtronComponent from "./components/jumbotron/jumbtron.component";
import MainComponent from "./components/main/main.component";
import CardComponent from "./components/card/card.component";
import FooterComponent from "./components/footer/footer.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <JumbtronComponent />
      <MainComponent />
      <CardComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
