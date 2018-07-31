// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import index from '../store/index.js'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VCarousel,
  VToolbar,
  transitions,
  VCard,
  VDivider,
  VBadge,
  VDialog,
  VTabs,
  VPagination,
  VSubheader,
  VMenu,
  VForm,
  VTextField
  
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCarousel,
    VCard,
    VDivider,
    VBadge,
    VDialog,
    VTabs,
    VPagination,
    VSubheader,
    VMenu,
    VForm,
    VTextField
    
    
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: index,
  beforeCreate(){
    axios.get('http://localhost:3000/page?id=1')
    .then(res=>{
      this.$store.state.product = res.data
    });
  }
})
