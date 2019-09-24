// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { fetchData, fetchCategories, fetchTags, setActiveCategory, fetchAbout, stopLoading } from 'src/store/reducer';

const mapStateToProps = ({ datas, activeCategory, loading }) => ({
  datas,
  activeCategory,
  loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: () => {
    dispatch(fetchData());
  },
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchTags: () => {
    dispatch(fetchTags());
  },
  fetchAbout: () => {
    dispatch(fetchAbout());
  },
  setActiveCategory: (selection) => {
    dispatch(setActiveCategory(selection));
  },
  stopLoading: () => {
    dispatch(stopLoading());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;

