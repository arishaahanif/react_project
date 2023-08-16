import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);
 

  const increment = (id, type) => {

    if (type === "INCREMENT") {
      const findVal = cart.findIndex(item => item.id === id);

      cart[findVal].qty + 1;
      console.log(cart[findVal].qty++)
    
      // console.log(cartIncrement)
    }
  }
  // console.log(type)


  return (
    <AppContext.Provider value={[counter, setCounter, cart, setCart, increment]}>
      {children}
    </AppContext.Provider>
  );
}
