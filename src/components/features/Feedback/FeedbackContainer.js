import { connect } from 'react-redux';

import Feedback from './Feedback';
import { getFeedback, getFeedbackCount } from '../../../redux/feedbackRedux';

const mapStateToProps = (state, props) => ({
  feedback: getFeedback(state, props),
  feedbackCount: getFeedbackCount(state, props),
});

export default connect(mapStateToProps)(Feedback);
