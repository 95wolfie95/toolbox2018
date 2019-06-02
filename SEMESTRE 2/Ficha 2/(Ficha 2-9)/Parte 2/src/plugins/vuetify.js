import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme:{
    primary: "#f44336",
    secondary: "#e91e63",
    accent: "#9c27b0",
    error: "#ff5722",
    warning: "#ffeb3b",
    info: "#ff9800",
    success: "#4caf50"
  }
})
