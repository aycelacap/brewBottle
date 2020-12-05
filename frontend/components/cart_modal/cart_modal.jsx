import React from "react";
import { Link } from "react-router-dom";

class CartModal extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        if (this.componentDidUpdate.contains(e.target)) {
            return;
        }

        this.props.closeModal();
    }

    render () {
        return (
            <div className='cart-modal-container'  ref={node => this.node = node}>
                <h3 className='cart-modal-header'>Added To Your Bag</h3>
                 <a className='cart-modal-button' onClick={this.props.closeModal} href="#cart">View Bag</a>
            </div>
        )
    }
}

export default CartModal;