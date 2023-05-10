import './app.css'
import App from './App.svelte'

// Exposing 
// @ts-ignore
// window.sveltedata = data || [];

const appEl = document.getElementById('app');
if (appEl) {
  appEl.innerHTML = '';
}
const app = new App({
  target: appEl,
})

export default app
