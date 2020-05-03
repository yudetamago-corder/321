import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"

Vue.config.productionTip = false
const config={
  apiKey:"AIzaSyAYIaBJbV0hcSXj3sHVMg3Rr6rEAMuuQ2M",
  projectId:"test-f4b35",
  authDomain:"test-f4b35.firebaseapp.com",
  databaseURL:"https://test-f4b35.firebaseio.com",
  storageBucket:"test-f4b35.appspot.com",
}



firebase.initializeApp(config);
export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
