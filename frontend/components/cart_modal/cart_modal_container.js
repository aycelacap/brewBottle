import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CartModal from './cartModal';

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(CartModal);