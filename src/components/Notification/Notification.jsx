import { Component } from 'react';
import { Message } from './Notification.styled';
import PropTypes from 'prop-types';


export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <Message>{message}</Message>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}