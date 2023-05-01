import "./App.css";
import Tops from "./component/Top";
import Headers from "./component/Header";
import Navbars from "./component/Navbar";
import Center from "./component/Center";
import Act from "./component/Act";
import Onlines from "./component/Online";
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
      <Onlines />
      <Slick />
    </>
  );
}

export default App;
