import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './add-form.css';

class AddForm extends Component {
  state = {
    label: '',
  };

  onChangeHandle = (event) => {
    const { value } = event.target;
    this.setState({
      label: value,
    });
  };

  onSubmitHandle = (event) => {
    event.preventDefault();
    const { onAdd } = this.props;
    const { label } = this.state;
    onAdd(label);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form className="add-form d-flex" onSubmit={this.onSubmitHandle}>
        <input
          className="form-control"
          placeholder="Type to add new task"
          value={label}
          onChange={this.onChangeHandle}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Add
        </button>
      </form>
    );
  }
}

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddForm;
