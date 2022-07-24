import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//Screens
import Home from "./screens/Home";
import About from "./screens/About";
import Women from "./screens/Women";
import Men from "./screens/Men";
import Cart from "./screens/Cart";
import Contact from "./screens/Contact";

//Components
import FixedBar from "./components/fixedBar/FixedBar";
import Hamburger from "./components/hamburger/Hamburger";
import Header from "./components/header/Header";

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleHamburger={toggleHamburger}
              setToggleHamburger={setToggleHamburger}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
