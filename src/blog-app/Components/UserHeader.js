import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

export class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>UserHeader!</div>;
  }
}

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  null,
  mapDispatchToProps
)(UserHeader);
