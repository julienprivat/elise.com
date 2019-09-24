// == Initial State
const initialState = {
  datas: [],
  activeCategory: 'EDITORIAL',
  categories: [],
  activeGender: 'ALL',
  tags: [],
  about: false,
  aboutInfo: [],
  loading: true,
};

// == Types
export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_DATAS = 'SAVE_DATAS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_GENDER = 'SET_GENDER';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const FETCH_TAGS = 'FETCH_TAGS';
export const SAVE_TAGS = 'SAVE_TAGS';
export const FETCH_POSTS_TAG = 'FETCH_POSTS_TAG';
export const SAVE_POSTS_TAG = 'SAVE_POSTS_TAG';
export const FETCH_ABOUT = 'FETCH_ABOUT';
const SAVE_ABOUT = 'SAVE_ABOUT';
const SHOW_ABOUT = 'SHOW_ABOUT';
const CLOSE_ABOUT = 'CLOSE_ABOUT';
const STOP_LOADING = 'STOP_LOADING';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATAS:
      return {
        ...state,
        datas: action.datas,
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.datas,
      };
    case SAVE_TAGS:
      return {
        ...state,
        tags: action.datas,
      };
    case SAVE_POSTS_TAG:
      return {
        ...state,
        datas: action.datas,
      };
    case SET_CATEGORY:
      return {
        ...state,
        activeCategory: action.selection,
      };
    case SET_GENDER:
      return {
        ...state,
        activeGender: action.selection,
      };
    case SHOW_ABOUT: {
      const { about } = state;
      return {
        ...state,
        about: !about,
      };
    }
    case CLOSE_ABOUT: {
      const { about } = state;
      return {
        ...state,
        about: false,
      };
    }
    case SAVE_ABOUT: {
      const { datas } = action;
      return {
        ...state,
        aboutInfo: datas,
      };
    }
    case STOP_LOADING: 
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchData = () => ({
  type: FETCH_DATA,
});
export const saveDatas = datas => ({
  type: SAVE_DATAS,
  datas,
});
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});
export const saveCategories = datas => ({
  type: SAVE_CATEGORIES,
  datas,
});
export const fetchTags = () => ({
  type: FETCH_TAGS,
});
export const saveTags = datas => ({
  type: SAVE_TAGS,
  datas,
});
export const setActiveCategory = selection => ({
  type: SET_CATEGORY,
  selection,
});
export const setActiveGender = selection => ({
  type: SET_GENDER,
  selection,
});
export const fetchPostsTag = id => ({
  type: FETCH_POSTS_TAG,
  id,
});
export const savePostsTag = datas => ({
  type: SAVE_POSTS_TAG,
  datas,
});
export const showAbout = () => ({
  type: SHOW_ABOUT,
});
export const closeAbout = () => ({
  type: CLOSE_ABOUT,
});
export const fetchAbout = () => ({
  type: FETCH_ABOUT,
});
export const saveAbout = datas => ({
  type: SAVE_ABOUT,
  datas,
});
export const stopLoading = () => ({
  type: STOP_LOADING,
});


// == Selectors


// == Export
export default reducer;
