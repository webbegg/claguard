import DefaultTheme from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import './style.css'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {}),
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
  },
}
