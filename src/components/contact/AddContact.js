import React, { Component } from "react";
import { Consumer } from "../../Context";
import InputFieldGroup from "../layout/InputFieldGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      return this.setState({ errors: { name: "name is required" } });
    }
    if (email === "") {
      return this.setState({ errors: { email: "email is required" } });
    }
    if (phone === "") {
      return this.setState({ errors: { phone: "phone is required" } });
    }
    const newContacts = {
      name,
      email,
      phone,
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContacts
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputFieldGroup
                    label="Name"
                    name="name"
                    placeholder="enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <InputFieldGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <InputFieldGroup
                    label="Phone"
                    name="phone"
                    placeholder="enter phone number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
