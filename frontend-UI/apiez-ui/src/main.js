import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
//import './assets/bobson.css'
require('@/assets/bobson.css')
//require("modules/jquery-ui/themes/black-tie/jquery-ui.css");
//require("modules/jquery-ui/themes/black-tie/jquery-ui.theme.css");

Vue.config.productionTip = false
//global.$ = jQuery
window.$ = window.jQuery = require('jquery'),require('jquery-ui');

new Vue({
  render: h => h(App),
}).$mount('#app')
