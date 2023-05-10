import './app.css'
// @ts-ignore
import App from './App.svelte'

console.log("main.js ---")
const appEl = document.getElementById('app');
if (appEl) {
  appEl.innerHTML = '';
}
const app = new App({
  target: appEl,
})

export default app