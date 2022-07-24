import "./App.css";
import { useState } from "react";
import FixedBar from "./components/fixedBar/FixedBar";
import Hamburger from "./components/hamburger/Hamburger";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Women from "./components/women/Women";
import Men from "./components/men/Men";
import Contact from "./components/contact/Contact";

function App() {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  return (
    <div className="App">
      <Header
        toggleHamburger={toggleHamburger}
        setToggleHamburger={setToggleHamburger}
      />
      <Hamburger show={toggleHamburger} />
      <FixedBar />
      <Info click={() => setToggleHamburger(false)} />
      <Women click={() => setToggleHamburger(false)} />
      <Men click={() => setToggleHamburger(false)} />
      <Contact click={() => setToggleHamburger(false)} />
    </div>
  );
}

export default App;
