import Info from "../components/info/Info";
import Women from "../components/women/Women";
import Men from "../components/men/Men";
import Contact from "../components/contact/Contact";

function Home({ toggleHamburger, setToggleHamburger }) {
  return (
    <div className="Home">
      <Info click={() => setToggleHamburger(false)} />
      <Women click={() => setToggleHamburger(false)} />
      <Men click={() => setToggleHamburger(false)} />
      <Contact click={() => setToggleHamburger(false)} />
    </div>
  );
}

export default Home;
