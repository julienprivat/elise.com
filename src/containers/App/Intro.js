// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Intro from 'src/components/App/Intro';

// Action Creators

const mapStateToProps = ({ loading }) => ({
  loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
 
});

// Container
const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Intro);

// == Export
export default IntroContainer;

