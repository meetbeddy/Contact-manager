import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showDetails: false,
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { name, phone, email, id } = this.props;
    const { showDetails } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {" "}
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({ showDetails: !this.state.showDetails })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />{" "}
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  {" "}
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  />
                </Link>
              </h4>
              {showDetails ? (
                <ul className="list-group">
                  <li className="list-group-item"> email: {email} </li>
                  <li className="list-group-item"> phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contact;
