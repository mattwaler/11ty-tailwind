<script>
  import { message } from './svelte'

  function changeMessage() {
    return $message == 'This is a Svelte store!'
      ? message.set('This changed everywhere, right?')
      : message.set('This is a Svelte store!')
  }
</script>

<h2 class="text-30">{$message}</h2>
<button class="bg-blue-500 p-16 my-24 text-white" on:click={changeMessage}>
  Change Message!
</button>
