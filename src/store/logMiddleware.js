import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

import { FETCH_DATA, FETCH_CATEGORIES, FETCH_TAGS, FETCH_POSTS_TAG, FETCH_ABOUT, saveAbout, saveCategories, saveDatas, saveTags, savePostsTag, stopLoading } from 'src/store/reducer';

const logMiddleware = store => next => (action) => {

  switch (action.type) {
    case FETCH_DATA:
      loadProgressBar();
      axios({
        method: 'GET',
        url: 'http://eliseaccart.com/wp-json/wp/v2/posts?per_page=200',
        responseType: 'json',
      })
        .then((response) => {
          const { data } = response;
          store.dispatch(saveDatas(data));
          store.dispatch(stopLoading());
        })
        .catch(console.log('no'));
      break;
    case FETCH_CATEGORIES:
      axios({
        method: 'GET',
        url: 'http://eliseaccart.com/wp-json/wp/v2/categories',
        responseType: 'json',
      })
        .then((response) => {
          const { data } = response;
          store.dispatch(saveCategories(data));
        })
        .catch(console.log('no'));
      break;
      case FETCH_ABOUT:
        axios({
          method: 'GET',
          url: 'http://eliseaccart.com/wp-json/wp/v2/about',
          responseType: 'json',
        })
          .then((response) => {
            const { data } = response;
            store.dispatch(saveAbout(data));
          })
          .catch(console.log('no'));
        break;
    case FETCH_TAGS:
      axios({
        method: 'GET',
        url: 'http://eliseaccart.com/wp-json/wp/v2/tags?per_page=99',
        responseType: 'json',
      })
        .then((response) => {
          const { data } = response;
          store.dispatch(saveTags(data));
        })
        .catch(console.log('no'));
      break;
    case FETCH_POSTS_TAG:
      const id = action.id;
      axios({
        method: 'GET',
        url: `http://eliseaccart.com/wp-json/wp/v2/posts/?tags=${id}&per_page=99`,
        responseType: 'json',
      })
        .then((response) => {
          const { data } = response;
          store.dispatch(savePostsTag(data));
        })
        .catch(console.log('no'));
      break;
    default:
      next(action);
  }
};

export default logMiddleware;

