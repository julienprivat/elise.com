import axios from 'axios';

import FETCH_DATA from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action
  const home = 'http://elise.local/';
  switch (action.type) {
    case FETCH_DATA:
       axios.get('http://elise.local/wp/v2/posts')
         .then(response => {
               // Ici tu sais que tu as obtenu avec succès ta réponse
               // Tu peux la récupérer dans response.data
             const { data } = response.
                //  Il faut ensuite informer le reducer des nouvelles données reçues
               store.dispatch(receivedQqchose(data));
  })
         .catch()
    default:
       next(action);
  }
};

export default logMiddleware;
