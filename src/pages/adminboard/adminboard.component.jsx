import React, { Component } from "react";

import UserService from "../../services/user.service";
<<<<<<< HEAD
import EventBus from "../../utils/event-bus.component";
=======
>>>>>>> 2801228 (Admin board)

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        window.location.href = "http://localhost:3000";
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
