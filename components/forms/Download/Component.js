import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {reduxForm} from 'redux-form';
import Validator from './Validator';

const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  error,
  ...domProps }) => domProps;

@reduxForm({
  form: 'soundcloud-downloader',
  fields: ['userId', 'token', 'clientId'],
  validate: Validator
  // asyncValidate: (data, dispatch, {download}) => download(data)
})

export default class extends Component {
  static propTypes = {
    active: PropTypes.string,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  };

  render() {
    const {
      fields: {clientId, userId, token},
      handleSubmit,
      } = this.props;
    const styles = require('./Component.scss');
    const renderInput = (field, label, optional) =>
      <div className={'form-group' + (field.error && field.touched ? ' has-error' : '')}>
        <label htmlFor={field.name} className="col-xs-2">{label} {optional && '(Optional)'}</label>
        <div className={'col-xs-8 ' + styles.inputGroup}>
          <input type="text" className="form-control" id={field.name} {...domOnlyProps(field)}/>
          {field.error && field.touched && <div className="text-danger">{field.error}</div>}
        </div>
      </div>;

    return (
      <div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {renderInput(userId, 'User ID')}
          {renderInput(token, 'OAuth Token')}
          {renderInput(clientId, 'Client ID', true)}
          <div className="form-group">
            <div className="col-xs-offset-2 col-xs-10">
              <button className="btn btn-success" type="submit">
                <i className="fa fa-download"/> Download
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
