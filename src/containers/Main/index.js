// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Main from 'src/components/Main';

// Action Creators
import { fetchData, closeAbout } from 'src/store/reducer';

const mapStateToProps = ({ datas, activeCategory, categories, activeGender, about, aboutInfo }) => ({
  datas,
  activeCategory,
  categories,
  activeGender,
  about,
  aboutInfo,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: () => {
    dispatch(fetchData());
  },
  closeAbout: () => {
    dispatch(closeAbout());
  },
});

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;

