import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { required, minLength } from "../../utils/validators";
import InputField from '../../components/inputs/InputField';
import Button from '../../components/inputs/Button';
import DropDownInputField from '../../components/inputs/DropdownInputField';
import FileField from '../../components/inputs/FileField';

export class EditProfileForm extends Component {
    static propTypes = {
        updateStoreProfile: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        details: PropTypes.object.isRequired
    };

    state = {
        saveClicked: false
    }

    phoneNumberMinLength = minLength(10);

    submitHandler = values => {
        this.setState({
            saveClicked: true
        }, () => { this.props.updateStoreProfile(values);});
    };

    componentDidUpdate() {
        const { ajaxStatus } = this.props;
        if (ajaxStatus.isSubmitSuccess && this.state.saveClicked) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        const { details } = this.props;
        this.props.initialize({
            name: details.name,
            image: details.image,
            address: details.address,
            district: details.district,
            city: details.city,
            phone: details.phone,
            companyName: details.redInvoice.name,
            companyAddress: details.redInvoice.address,
            companyDistrict: details.redInvoice.district,
            companyCity: details.redInvoice.city,
            taxCode: details.redInvoice.taxCode
        })
    }

    render() {
        const { onClose, handleSubmit, ajaxStatus, pristine } = this.props;

        return (
            <form >
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="mb-3">Store Image</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Field
                                            name={`image`}
                                            component={FileField}
                                            // validate={[required]}
                                        />
                                    </div>
                                </div>
                            </div>
                        <div className="col-md-8">
                            <h4 className="mb-3">Basic Info</h4>
                            <div className="row">
                                <label className="col-md-3 control-label">Store Name</label>
                                <div className="col-md-9 mb-3">
                                    <Field
                                        name={`name`}
                                        type="text"
                                        component={InputField}
                                        validate={[required]}
                                        className="form-control name"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-md-3 control-label">Store Address</label>
                                <div className="col-md-3 mb-3">
                                    <Field
                                        name={`address`}
                                        type="text"
                                        component={InputField}
                                        validate={[required]}
                                    />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <Field
                                        name={`district`}
                                        component={DropDownInputField}
                                        validate={[required]}
                                    >
                                        <option value="">District</option>
                                        <option value="District 1">District 1</option>
                                        <option value="District 2">District 2</option>
                                    </Field>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <Field
                                        name={`city`}
                                        component={DropDownInputField}
                                        validate={[required]}
                                    >
                                        <option value="">Select City</option>
                                        <option value="HCM">HCM</option>
                                        <option value="Hanoi">Hanoi</option>
                                    </Field>
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-md-3 control-label">Phone #</label>
                                <div className="col-md-9 mb-3">
                                    <Field
                                        name={`phone`}
                                        type="number"
                                        formatNumber="(###) ###-####"
                                        component={InputField}
                                        validate={[required, this.phoneNumberMinLength]}
                                    />
                                </div>
                            </div>
                            <h4 className="mb-3">Red Invoice Info</h4>
                            <div className="row">
                                <label className="col-md-3 control-label">Company Name</label>
                                <div className="col-md-9 mb-3">
                                    <Field
                                        name={`companyName`}
                                        type="text"
                                        component={InputField}
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-md-3 control-label">Store Address</label>
                                <div className="col-md-3 mb-3">
                                    <Field
                                        name={`companyAddress`}
                                        type="text"
                                        component={InputField}
                                        validate={[required]}
                                    />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <Field
                                        name={`companyDistrict`}
                                        component={DropDownInputField}
                                        validate={[required]}
                                    >
                                        <option value="">District</option>
                                        <option value="District 1">District 1</option>
                                        <option value="District 2">District 2</option>
                                    </Field>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <Field
                                        name={`companyCity`}
                                        component={DropDownInputField}
                                        validate={[required]}
                                    >
                                        <option value="">Select City</option>
                                        <option value="HCM">HCM</option>
                                        <option value="Hanoi">Hanoi</option>
                                    </Field>
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-md-3 control-label">MST</label>
                                <div className="col-md-9 mb-3">
                                    <Field
                                        name={`taxCode`}
                                        type="text"
                                        component={InputField}
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
                    <Button
                        type="button"
                        onClick={handleSubmit(this.submitHandler)}
                        disabled={pristine || ajaxStatus.isSubmitting}
                        submitting={ajaxStatus.isSubmitting}
                    >
                        Save
                    </Button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'editProfileForm', // a unique identifier for this form,
})(EditProfileForm);
