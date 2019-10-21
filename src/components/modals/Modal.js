import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from 'react-bootstrap/Modal';

export default class Modal extends Component {
  static propTypes = {
    show: PropTypes.oneOfType([
      PropTypes.string, // string value
      PropTypes.bool // boolean value
    ]), // show if not false 0 "" null undefined NaN, else hide
    title: PropTypes.node.isRequired, // title translation id or element
    body: PropTypes.node, // body translation id or element
    children: PropTypes.node.isRequired, // footer element
    genericError: PropTypes.bool,
    genericErrorMessageOne: PropTypes.node,
    genericErrorMessageTwo: PropTypes.node
  };

  static defaultProps = {
    show: false,
    genericError: false,
    genericErrorMessageOne: '',
    genericErrorMessageTwo: '',
    body: ''
  };

  render() {
    const { show, title, body, genericErrorMessageOne, genericErrorMessageTwo, children } = this.props;

    return (
      <ModalDialog dialogClassName="ios" show={!!show}>
        {!this.props.genericError && (
          <ModalDialog.Header>
            <ModalDialog.Title>{title}</ModalDialog.Title>
          </ModalDialog.Header>
        )}
        <ModalDialog.Body>
          {!this.props.genericError ? (
            <span>{body}</span>
          ) : (
            <div className="modal-generic">
              <div className="modal-generic__message">
                {genericErrorMessageOne}
                <br />
                {genericErrorMessageTwo}
              </div>
            </div>
          )}
        </ModalDialog.Body>
        <ModalDialog.Footer
        >
          {children}
        </ModalDialog.Footer>
      </ModalDialog>
    );
  }
}
