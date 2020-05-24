<script>
  import { message } from './store'

  function changeMessage() {
    return $message == 'This is a Svelte store!'
      ? message.set('This changed everywhere, right?')
      : message.set('This is a Svelte store!')
  }
</script>

<h2 class="text-2xl">{$message}</h2>
<button class="bg-blue-500 p-2 mt-8 text-white" on:click={changeMessage}>
  Change Message!
</button>
