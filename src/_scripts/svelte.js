import { run } from './helpers'
import Message from './message.svelte'
import Navigation from './navigation.svelte'

run('[data-message]', (target) => new Message({ target }))
run('[data-navigation]', (target) => new Navigation({ target }))
