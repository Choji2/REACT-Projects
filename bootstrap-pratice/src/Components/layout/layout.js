import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import NavBar from "./nav-bar";
import Footer from "./footer";
import ModalComp1 from "./modal";

export default function Layout(props) {
  const [modalState,setModalState]=React.useState(false);
  const [homeLinkDisable, setHomeDisable] = React.useState(true);
  const [otherLinkDisable, setOtherDisable] = React.useState(false);
  const [gridLinkDisable, setGridDisable] = React.useState(false);

  return (

    <React.Fragment>
      <NavBar
        otherLinkDisable={otherLinkDisable}
        setOtherDisable={setOtherDisable}
  
        gridLinkDisable={gridLinkDisable}
        setGridDisable={setGridDisable}
  
        homeLinkDisable={homeLinkDisable}
        setHomeDisable={setHomeDisable}
        inputState={props.inputState}
      />
      <ModalComp1 modalState={modalState} modalTitle='Sup Kid'/> 

      <main id="scroll">{props.children}</main>

      <Footer />
    </React.Fragment>
  );
}
