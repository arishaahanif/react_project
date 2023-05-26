import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const Tops = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fixedHeaderStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(238, 138, 30)",
    zIndex: 999,
  };
  const headerStyles={
    
  }

  return (
    <div
      className="main_top"
      style={isHeaderFixed ? fixedHeaderStyles : headerStyles}
    >
      <h6 className="saving">
        saving starts from $40 &nbsp;
        <span>
          {" "}
          <Button size="sm" className="btn">
            click here
          </Button>{" "}
        </span>
      </h6>
    </div>
  );
};
export default Tops;
