import Info from "../components/info/Info";
import Women from "../components/women/Women";
import Men from "../components/men/Men";
import Footer from "../components/footer/footer";
import FixedBar from "../components/fixedBar/FixedBar";

function Home({ toggleHamburger, setToggleHamburger }) {
  return (
    <div className="Home">
      <FixedBar />
      <Info click={() => setToggleHamburger(false)} />
      <Women click={() => setToggleHamburger(false)} />
      <Men click={() => setToggleHamburger(false)} />
      <Footer click={() => setToggleHamburger(false)} />
    </div>
  );
}

export default Home;
