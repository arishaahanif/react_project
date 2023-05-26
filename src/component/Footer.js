import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft_container">
        <div className="ft_item">
          <p className="para">© 2023 <a href="#">OSHA Online Center</a></p>
        </div>
        <div className="f_item">
          <span className="span">
            <BsFacebook size={20} />
            <AiFillYoutube size={20} />

            <AiOutlineTwitter size={20} />
            <AiOutlineInstagram size={20} />

            <AiFillLinkedin size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
