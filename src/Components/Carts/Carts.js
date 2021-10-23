import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Carts.css"
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import CartItems from './CartItems';
import { Modal,Button } from 'react-bootstrap';

const Carts = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const namee= "md imranul haque"
    return (
        <>
        <div className="container pb-5">
            <p className="pt-1 ctn"> <Link className="text-linkr" to="/books"><FaArrowLeft /> Continue Book shopping</Link> </p>
            <div>
                <div>
                    <h3 style={{ marginbottom: "0px" }}>cart</h3>
                    <p className="pb-1">You have <span className="text-primary h5">7</span> items in cart </p>
                </div>
                <div className="contan">
                    <CartItems />
                </div>

            </div>
            <div className="text-end px-5">
                <h5 className="me-3">Cart Total : - $<span>32513</span></h5>
                <button onClick={() => setModalShow(true)}  className="btn btn-primary w-25 ">CheckOut</button>
            </div>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        namee={namee}
        onHide={() => setModalShow(false)}
      />
        </>
    );
};

export default Carts;
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Happy buying
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>your History</h4>
          <h3>{props.namee}</h3>
          <p>You have 7 items in cart</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur quos optio. Excepturi, sint, atque id vero, rem nemo natus vitae tempora voluptate incidunt quidem cum. Amet, repudiandae. At, quaerat.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={props.onHide}>buy Now</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  