import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import classNames from 'classnames';

class InputField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        placeholder: PropTypes.string,
        type: PropTypes.string,
        meta: PropTypes.object.isRequired,
        label: PropTypes.node,
        className: PropTypes.string,
        rows: PropTypes.number,
        maxLength: PropTypes.number,
        allowNegative: PropTypes.bool,
        disabled: PropTypes.bool,
        thousandSeparator: PropTypes.bool,
        isUsername: PropTypes.bool,
        isClearable: PropTypes.bool,
        onEnterKeyPress: PropTypes.func,
        accept: PropTypes.string,
        formatNumber: PropTypes.string
    };

    static defaultProps = {
        className: 'form-control',
        placeholder: '',
        type: 'text',
        label: '',
        rows: 5,
        maxLength: null,
        allowNegative: false,
        disabled: false,
        thousandSeparator: false,
        isUsername: false,
        isClearable: true,
        accept: '',
        formatNumber: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            hidePlaceholder: false,
        }
    }

    onFocusInputIDNumber = e => {
        this.setState({ hidePlaceholder: true });
    };

    onBlurInputIDNumber = e => {
        this.setState({ hidePlaceholder: false });
        if (this.props.onEnterKeyPress) {
            this.props.onEnterKeyPress(e);
        }
    };

    onNumberChange = values => {
        const { value } = values;
        this.props.input.onChange(value);
    };

    onPaste = e => {
        if (this.props.maxLength) {
            e.clipboardData.getData('text/plain').slice(0, this.props.maxLength);
        }
    };

    onKeyUp = () => {
        const { isUsername, input } = this.props;
        if (isUsername) {
            const val = input.value.replace(/[^\w_]/ig, '');
            this.props.input.onChange(val);
        }
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter' && this.props.onEnterKeyPress) {
            this.props.onEnterKeyPress(e);
        }
    };

    fileChange =(e) => {
        this.props.input.onChange(e.target.files[0]);
    };

    render() {
        const {
            input,
            type,
            meta,
            label,
            placeholder,
            className,
            rows,
            maxLength,
            allowNegative,
            disabled,
            thousandSeparator,
            accept,
            formatNumber
        } = this.props;
        return (
            <React.Fragment>
                {type === 'number' && (
                    <NumberFormat
                        name={input.name}
                        disabled={disabled}
                        thousandSeparator={thousandSeparator ? true : ''}
                        allowNegative={allowNegative}
                        value={input.value}
                        maxLength={maxLength}
                        onValueChange={this.onNumberChange}
                        placeholder={this.state.hidePlaceholder ? '' : placeholder}
                        onBlur={this.onBlurInputIDNumber}
                        onFocus={this.onFocusInputIDNumber}
                        onKeyPress={this.onKeyPress}
                        format={formatNumber}
                        mask="_"
                        className={classNames(className, { 'form-control-invalid': meta.touched && meta.error })}
                    />
                )}
                {type === 'textarea' && (
                    <textarea
                        {...input}
                        disabled={disabled}
                        name={input.name}
                        placeholder={this.state.hidePlaceholder ? '' : placeholder}
                        className={classNames(className, { 'form-control-invalid': meta.touched && meta.error })}
                        rows={rows}
                        maxLength={maxLength}
                        onPaste={this.onPaste}
                    />
                )}
                {type === 'checkbox' && <label>
                    <input {...input} type='checkbox' disabled={disabled} className={className}/>
                    {label}
                </label>}
                {type === 'file' &&
                <input name={input.name} type='file' disabled={disabled} className={className} accept={accept} onChange={this.fileChange}/>
                }
                {type !== 'number' &&
                type !== 'month' &&
                type !== 'datePicker' &&
                type !== 'textarea' && type !== 'checkbox' && type !== 'file' && (
                    <input
                        {...input}
                        disabled={disabled}
                        placeholder={this.state.hidePlaceholder ? '' : placeholder}
                        type={type}
                        onKeyUp={this.onKeyUp}
                        onBlur={this.onBlurInputIDNumber}
                        onFocus={this.onFocusInputIDNumber}
                        className={classNames(className, { 'form-control-invalid': meta.touched && meta.error })}
                    />
                )}
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            </React.Fragment>
        );
    }
}

export default InputField;
