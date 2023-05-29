import "./App.css";
import Tops from "./component/Top";
import Headers from "./component/Header";
import Navbars from "./component/Navbar";
import Center from "./component/Center";
import Act from "./component/Act";
import Onlines from "./component/Online";
import Autoplay from "./component/Autoplay";
import Things from "./component/Things";
import Choose from "./component/Choose";
import State from "./component/State";
import Footer from "./component/Footer";
import Subscribe from "./component/Subscribe";
import GoToTop from "./component/GoToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.min";
import "./style.css";
import { Slick } from "./component/Slick";

function App() {
  return (
    <>
      <Tops />
      <Headers />
      <Navbars />
      <Center />
      <Act />
      <Slick />
      <Autoplay/>
      <Onlines />
      <Things/>
      <Choose/>
      <State/>
      <Subscribe/>
      <Footer/>
      <GoToTop/>

    </>
  );
}

export default App;
