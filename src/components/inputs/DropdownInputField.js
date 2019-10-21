import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class DropDownInputField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    };

    static defaultProps = {
        className: 'form-control',
        disabled: false,
        onChange: () => {}
    };

    onChange = e => {
        this.props.input.onChange(e);
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    render() {
        const { input, meta, className, disabled } = this.props;
        return (
            <React.Fragment>
                <select
                    {...input}
                    onChange={this.onChange}
                    className={classNames(className, { 'form-control-invalid': meta.submitFailed && meta.error })}
                    disabled={disabled}
                >
                    {this.props.children}
                </select>
                {meta.submitFailed &&
                    meta.error && (
                        <div className="error">
                            {meta.error}
                        </div>
                    )}
            </React.Fragment>
        );
    }
}
