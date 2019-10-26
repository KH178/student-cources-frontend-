import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import courcesForm from './components/CourcesForm';

// Vue.use(VueRouter); 
// const routes = [
//   { path: '/', component: courcesForm },
//   // { path: '/', component: App }
// ];

// const router = new VueRouter({
//   routes
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router,
}).$mount('#app')
