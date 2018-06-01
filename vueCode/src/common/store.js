import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import head_store from '../modules/header/head_store.js';

export default new vuex.Store({
    modules: {
        head: head_store
    }
})