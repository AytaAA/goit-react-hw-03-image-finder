import style from "./Modal.module.css"
import { Component } from "react"

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.props.handleCloseModal(e)
            }
        })
    }
    render() {
        return (
            <div className={style.overlay} onClick={this.props.handleCloseModal}>
                <div className={style.modal}>
                    <img src={this.props.modalImage} alt="" />
                </div>
            </div>
        )
    }
}

export default Modal
