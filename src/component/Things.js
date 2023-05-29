import Banner from "../Images/is_osha_online_center_legit_banner_g2bybo.webp";
import Online from "../Images/dol-card-banner_gxkgsz.webp"


const Things = () => {
  return (
     <div className="things">
      <h2 className="need">THINGS YOU NEED TO KNOW</h2>
      <p className="get">
        Get your OSHA DOL Card upon successfully completing your safety
        training. Don't worry! Our courses are OSHA-Approved.
      </p>

      <div className="t_container">
        <div className="t-item">
            <img src={Banner}/>
            
        </div>
        <div className="t-item">
            <img src={Online}/>
        </div>
      </div>
    </div>
  );
};
export default Things;
