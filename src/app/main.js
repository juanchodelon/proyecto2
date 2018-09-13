import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue'
import Add from './components/add.vue';
import Hmobile from './components/headerMobile.vue';
import Menu from './components/menu.vue'

import Show from './components/show.vue';

export const bus = new Vue();

Vue.component('app-show', Show);
Vue.component('app-add', Add);
Vue.component('app-hmobile', Hmobile);
Vue.component('app-menu', Menu);
Vue.use(VueAxios, axios);

/******firebase*****************************************/
var config = {
  apiKey: "AIzaSyBxpMt6xn0By6VIFOWtBN0tk0pXDeZ6ZSM",
  authDomain: "app-news-bb81b.firebaseapp.com",
  databaseURL: "https://app-news-bb81b.firebaseio.com",
  projectId: "app-news-bb81b",
  storageBucket: "app-news-bb81b.appspot.com",
  messagingSenderId: "33599919117"
};
firebase.initializeApp(config);

const app = new Vue({
  el: '#app',
  render: function (h) {
    return h(App);
  }
});
