import PropTypes from 'prop-types';
import { OptionBtn } from '../FeedbackOptions/FeedbackOptions.styled';

export const OptionItem = ({ option, onLeaveFeedback }) => {
  return (
    <li>
      <OptionBtn type="button" onClick={onLeaveFeedback} name={option}>
        {option}
      </OptionBtn>
    </li>
  );
};

OptionItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};