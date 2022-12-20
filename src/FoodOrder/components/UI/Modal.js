import styles from './Modal.module.css'
import ReactDOM from "react-dom";
import {Fragment} from "react";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}/>
}

const ModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
          <div className={styles.content}>{props.children}</div>
      </div>
    )
}
const Modal = props => {
    return(
      <Fragment>
          {ReactDOM.createPortal(
            <Backdrop onClick={props.onClick}/>,
            document.getElementById('backdrop-root')
          )}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.getElementById('overlay-root')
          )}
      </Fragment>
      // <Card>
      //     {props.children}
      // </Card>
    )
}

export default Modal;