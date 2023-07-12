import { Component } from 'react';
import PropTypes from 'prop-types';
import { OptionBtn } from '../FeedbackOptions/FeedbackOptions.styled';

export class OptionItem extends Component {
  render() {
    const { option, onLeaveFeedback } = this.props;
    return (
      <li>
        <OptionBtn type="button" onClick={onLeaveFeedback} name={option}>
          {option}
        </OptionBtn>
      </li>
    );
  }
}

OptionItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};