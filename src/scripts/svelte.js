import { run } from './helpers'
import { writable } from 'svelte/store'

import Message from './message.svelte'
import Navigation from './navigation.svelte'

// Global State
export const message = writable('Hello from a Svelte Store!')

run('[data-message]', (target) => new Message({ target }))
run('[data-navigation]', (target) => new Navigation({ target }))
