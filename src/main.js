import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrtg0vIyCHVzQd_S58WVykDyQxmmamS_Q",
    authDomain: "my-address-pj-c954f.firebaseapp.com",
    databaseURL: "https://my-address-pj-c954f.firebaseio.com",
    projectId: "my-address-pj-c954f",
    storageBucket: "my-address-pj-c954f.appspot.com",
    messagingSenderId: "525650487584",
    appId: "1:525650487584:web:7e1098e5f5a5395ee6cf45",
    measurementId: "G-39X6HXEXT3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
