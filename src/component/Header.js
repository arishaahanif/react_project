import Button from "react-bootstrap/Button";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
// import { AppContext } from "../component/Context";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { AppContext } from "../Context.js/Counter";
import { Card, Row, Col, Table } from "react-bootstrap";


const Headers = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [counter, setCounter, cart,setCart,increment] = useContext(AppContext);
  // console.log(cart, 'cart')
  
  // console.log(counter,'counter')

  // console.log(cart,'cart')

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
          <Button onClick={handleShow} className="btn_1">
            <div>
              <BsCart3 size={25} />

              {/* <sup> */}
              <span>{counter}</span>

              {/* </sup> */}
            </div>
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <div>
              {/* <Table>
              <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
        </tr>
      </thead>
              </Table> */}
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                {cart.length > 0 &&
                  cart.map((cartItem, cartIndex) => {
                    return (

                      <tbody>
                        <tr>
                          {/* <td>1</td> */}
                          <td>{cartItem.heading}</td>
                          <td>{cartItem.orginalPrice}</td>
                          <td>
                            <button>-</button>&nbsp;
                            
                            {cartItem.qty}</td>
                            <button onClick={() => increment(cartItem.id,"INCREMENT")}>+</button>


                          
                          
                        </tr>
                      </tbody>

                    )
                  })}
              </Table>

            </div>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
};
export default Headers;
