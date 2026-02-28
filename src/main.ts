import './app.css'
import App from './app.svelte'
import { mount } from 'svelte'

mount(App, {
  target: document.getElementById('app')!,
})