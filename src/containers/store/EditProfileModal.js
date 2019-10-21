import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {
    updateStoreProfile,
    resetAjaxStatus
} from "../../redux/actions/storeActions";
import EditProfileForm from './EditProfileForm'

export class EditProfileModal extends Component {
    static propTypes = {
        show: PropTypes.oneOfType([
            PropTypes.string, // string value
            PropTypes.bool // boolean value
        ]), // show if not false 0 "" null undefined NaN, else hide
        onClose: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        updateStoreProfile: PropTypes.func.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        profile: PropTypes.object.isRequired
    };

    static defaultProps = {
        show: false,
    };

    componentDidMount() {
        this.props.resetAjaxStatus();
    }

    render() {
        const { show, onClose, ajaxStatus, updateStoreProfile, profile } = this.props;

        return  <Modal
        size="lg"
        show={!!show}
        onHide={onClose}
      >
        <Modal.Header closeButton>
          <Modal.Title >
            Edit Profile
          </Modal.Title>
        </Modal.Header>
        <EditProfileForm ajaxStatus={ajaxStatus} onClose={onClose} updateStoreProfile={updateStoreProfile} details={profile}/>
      </Modal>
            
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus,
        profile: state.store.profile
    };
};

export default connect(
    mapStateToProps,
    {
        updateStoreProfile,
        resetAjaxStatus
    }
)(EditProfileModal);
