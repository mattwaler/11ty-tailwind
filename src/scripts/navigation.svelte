<script>
  import { message } from './svelte'

  let navigation = []
  async function getNavJson() {
    const response = await fetch('/api/navigation.json')
    const data = await response.json()
    navigation = data
  }
  getNavJson()
</script>

<div class="mt-48">
  <p>The list below is fetched from a local JSON file and rendered via Svelte!</p>
  {#each navigation as { text, link }}
    <a class="block mt-8 underline" href={link}>{text}</a>
  {/each}
</div>

<div class="mt-48">
  <p>The string below is global and will stay in sync when you update via other components!</p>
  <p class="text-30">{$message}</p>
</div>
