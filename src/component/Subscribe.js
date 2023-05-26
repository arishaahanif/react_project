import image from "../Images/HSI-OSHA-Authorized-Training-Provider-Seal_v7xpum.png";
import image1 from "../Images/payment-icon_v0bukh2_1_twdppa_pfezha.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Subscribe = () => {
  return (
    <div className="course">
      <div className="c_container">
        <div className="c_item">
          <ul>
            <p className="category">COURSE CATEGORIES</p>

            <li>
              <a href="#">OSHA 10 HOUR TRAINING</a>
            </li>
            <li>
              <a href="#">OSHA 10 HOUR TRAINING</a>
            </li>
            <p className="category">AUTHORIZED PROVIDER</p>
            <img src={image} width={250}></img>
          </ul>
        </div>
        <div className="c_item">
          <ul>
            <p className="category">COMPANY</p>

            <li>
              <a href="#">promotions</a>
            </li>
            <li>
              <a href="#">states requirements</a>
            </li>
            <li>
              <a href="#">about</a>
            </li> <li>
              <a href="#">reviews</a>
            </li> <li>
              <a href="#">video reviews</a>
            </li> <li>
              <a href="#">faq</a>
            </li>
            <li>
              <a href="#">sitemap</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li><li>
              <a href="#">refund policy</a>
            </li><li>
              <a href="#">terms & conditions</a>
            </li>
          </ul>
        </div>
        <div className="c_item ">
          <ul className="borders" >
            <p className="category">SUPPORT</p>

            <li>
            <a href="#"><span>Call</span>+1 (833) 739 2233</a>
            </li>
            <li className="email">
            <a href="#"><span>Email</span>help@oshaonlinecenter.com</a>
            </li>
            <hr/>
            <h6 className="accept">WE ACCEPT</h6>
            <img src={image1}></img>


          
          </ul>
        </div>
        <div className="c_item ">
        <p className="category">GET THE LATEST NEWS & UPDATES</p>
        <Form.Control size="lg" type="text" placeholder="Full Name" />
        <Form.Control size="lg" type="text" placeholder="Email Address" />
        <Form.Control size="lg" type="text" placeholder="Company (Optional)" />
        <Button variant="primary" size="lg">
        Subscribe
      </Button>


     
     
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
