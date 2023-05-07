import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Modal from "./components/Modal";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar></Navbar>
      <CardContainer></CardContainer>
    </main>
  );
}
export default App;
