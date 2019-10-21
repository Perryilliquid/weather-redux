import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modals/Modal';

export default class ActionDropdown extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        statusId: PropTypes.number.isRequired,
        approve: PropTypes.func.isRequired,
        repay: PropTypes.func.isRequired
    };

    state = {
        newStatusId: null
    };

    onSelectedItemChange = e => {
        this.setState({ newStatusId: e.target.value })

        
    };

    onStatusChange = () => {
        if(this.state.newStatusId === 'approve') {
            this.props.approve(this.props.id);
        } else if(this.state.newStatusId === 'repay') {
            this.props.repay(this.props.id);
        }

        this.setState({
            newStatusId: null
        });
    };

    closeModal = () => {
        this.setState({
            newStatusId: null
        });
    };

    render() {
        const {
            statusId
        } = this.props;

        return (
            <div>
                <select
                    name="actions"
                    className="form-control input-medium"
                    value=""
                    onChange={this.onSelectedItemChange}
                >
                    <option value="">
                        Select Action
                    </option>
                    {statusId !== 1 && <option value="approve">
                        Approve
                    </option>}
                    {statusId === 1 && <option value="repay">
                        Repay
                    </option>}
                </select>
                <Modal
                    show={this.state.newStatusId}
                    title={'Confirm'}
                    body={`Are you sure?`}
                >
                    <button type="button" className="btn btn-secondary" onClick={this.closeModal}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.onStatusChange}>
                        Confirm
                    </button>
                </Modal>
            </div>
        );
    }
}
