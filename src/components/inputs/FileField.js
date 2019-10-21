import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import SubmitButton from './Button';
import { uploadFile } from '../../services/uploadFileService';

export default class FileField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        disableDelete: PropTypes.bool,
        width: PropTypes.number,
        height: PropTypes.number,
        className: PropTypes.string,
        showDefaultIcon: PropTypes.bool,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disableDelete: false,
        width: 250,
        height: 200,
        className: 'control-image',
        showDefaultIcon: false,
        disabled: false
    };

    constructor(props) {
        super(props);

        this.state = {
            submitting: false,
            error: ''
        };
    }

    onDrop = (accepted, rejected) => {
        const { input } = this.props;
        if (accepted && accepted.length) {
            this.setState({
                submitting: true,
                error: ''
            });
            accepted.forEach(file => {
                // const data = new FormData();
                // data.append('file', file);
                // data.append('tag', tag);

                uploadFile('data')
                    .then(res => {
                        const mockData = { format: 'jpg', key: 'woman'};
                        input.onChange(mockData);
                        this.setState({
                            submitting: false
                        });
                    })
                    .catch(res => {
                        this.setState({
                            submitting: false,
                            error: res.response.data.message || 'Server error'
                        });
                    });
            });
        }
    };

    clearImage = () => {
        this.props.input.onChange(null);
    }

    render() {
        const { input, meta, width, height, className, showDefaultIcon, disabled } = this.props;
        let dropzoneRef;

        return (
            <div className={className}>
                <Dropzone
                    ref={node => {
                        dropzoneRef = node;
                    }}
                    name={input.name}
                    accept={'image/*'}
                    onDrop={this.onDrop}
                    disablePreview
                    multiple={false}
                    // maxSize={fileUploadSettings.maximumImageFileSize}
                    className={classNames('image-upload-cell mb-3', {
                        'no-image': !input.value.key && !showDefaultIcon,
                        'no-image-invalid': meta.touched && meta.error
                    })}
                    disabled={this.state.submitting || disabled}
                >
                    {!input.value.key &&
                    !showDefaultIcon && (
                        <p>
                            Select image to upload
                        </p>
                    )}
                    {input.value.key && (
                        <img
                            src={`https://res.cloudinary.com/demo/image/upload/w_${width},h_${height}/${input.value.key}.${
                                input.value.format
                                }`}
                            alt=""
                        />
                    )}
                    {!input.value.key &&
                    showDefaultIcon && <img src="/assets/global/img/avatar-sign.png" alt="" width={100}/>}
                </Dropzone>
                <div className="content-left">
                    {!disabled && <SubmitButton
                        type="button"
                        onClick={() => {
                            dropzoneRef.open();
                        }}
                        submitting={this.state.submitting}
                    >
                        {input.value ? (
                            'Change'
                        ) : (
                            'Select Image'
                        )}
                    </SubmitButton>}
                </div>
                {meta.touched &&
                (meta.error && (
                        <span className="error">
                            {meta.error}
                        </span>
                    ))}
                {this.state.error && <span className="error">{this.state.error}</span>}
            </div>
        );
    }
}
