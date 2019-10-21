import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
        className: PropTypes.string,
        submitting: PropTypes.bool,
        type: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        children: PropTypes.node.isRequired,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        submitting: false,
        disabled: false,
        userProfile: false,
        className: 'btn btn-primary',
        onClick: () => {}
    };

    render() {
        const { disabled, submitting, className } = this.props;

        return (
            <button
                type={this.props.type}
                className={className}
                disabled={disabled || submitting}
                onClick={this.props.onClick}
            >
                {submitting && <span className="spinner-border spinner-border-sm"></span>} {this.props.children}
            </button>
        );
    }
}
