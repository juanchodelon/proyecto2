import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue'
import Comp from './components/comp.vue';

export const bus = new Vue();

Vue.component('app-comp', Comp);
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
