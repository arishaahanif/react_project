import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Choose = () => {
  return (
 <section className="section">
     <div className="us">
      <h2 className="chos">Why Choose Us?</h2>

      <div className="certificate">
        <div class="con">
          <span class="icon">
            <AiOutlineSafetyCertificate size={50} />
          </span>
          <span class="text">Budget-Friendly</span>
        </div>
     
        <div class="con">
          <span class="icon">
            <AiOutlineSafetyCertificate size={50} />
          </span>
          <span class="text">Variety of <span className="option">Training Option</span></span>
        </div>
        <div class="con">
          <span class="icon">
            <AiOutlineSafetyCertificate size={50} />
          </span>
          <span class="text">Printable <span className="option">Certificates</span></span>
        </div>
        <div class="con">
          <span class="icon">
            <AiOutlineSafetyCertificate size={50} />
          </span>
          <span class="text">Flexible Training</span>
        </div>
        <div class="con">
          <span class="icon">
            <AiOutlineSafetyCertificate size={50} />
          </span>
          <span class="text">Customer <span className="option">Support</span></span>
        </div>
        <div class="con">
          <span class="icon">
            <AiOutlineSafetyCertificate size={50} />
          </span>
          <span class="text">Updated Safety<span className="option"> Training</span></span>
        </div>
      </div>
    </div>
 </section>
  );
};
export default Choose;
