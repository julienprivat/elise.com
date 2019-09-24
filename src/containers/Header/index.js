// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { showAbout, closeAbout } from 'src/store/reducer';

const mapStateToProps = ({ about }) => ({
  about,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  showAbout: () => {
    dispatch(showAbout());
  },
  closeAbout: () => {
    dispatch(closeAbout());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;

