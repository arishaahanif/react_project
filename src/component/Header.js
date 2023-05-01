import Button from "react-bootstrap/Button";
import { BsCart3 } from "react-icons/bs";

const Headers = () => {
  return (
    <div className="header">
      <div className="f_container">
        <div className="f_item">
          <ul>
            <li className="about">About OOC</li>
            <li className="about">+1(833) 739 2233</li>
            <li className="about">help@oshaonlinecenter.com</li>
          </ul>
        </div>
        <div className="f_item1">
          <Button variant="secondary" className="btn">
            login
          </Button>
          <BsCart3 size={25} />
        </div>
      </div>
    </div>
  );
};
export default Headers;
