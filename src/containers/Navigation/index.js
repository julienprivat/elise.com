// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navigation from 'src/components/Navigation';

// Action Creators
import { setActiveCategory, setActiveGender, fetchPostsTag, fetchData } from 'src/store/reducer';

const mapStateToProps = ({ datas, tags, activeCategory }) => ({
  datas,
  tags,
  activeCategory,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setActiveCategory: (selection) => {
    dispatch(setActiveCategory(selection));
  },
  setActiveGender: (selection) => {
    dispatch(setActiveGender(selection));
  },
  fetchPostsTag: (selection) => {
    dispatch(fetchPostsTag(selection));
  },
  fetchData: () => {
    dispatch(fetchData());
  },
});

// Container
const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

// == Export
export default NavigationContainer;

