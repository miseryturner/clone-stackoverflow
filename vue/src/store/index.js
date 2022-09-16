// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import Vuex from 'vuex';
import CTheme from './modules/CTheme'

export default new Vuex.Store({
  modules: {
    CTheme
  },
});

