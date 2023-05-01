import Button from "react-bootstrap/Button";

const Tops = () => {
  return (
    <div className="main_top">
      <h6 className="saving">
        saving starts from $40 &nbsp;
        <span>
          {" "}
          <Button size="sm"className="btn">
            click here
          </Button>{" "}
        </span>
      </h6>
    </div>
  
  );
};
export default Tops;
