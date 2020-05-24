<script>
  import { message } from './store'

  let navigation = []
  async function getNavJson() {
    const response = await fetch('/api/navigation.json')
    const data = await response.json()
    navigation = data
  }
  getNavJson()
</script>

<div class="mt-8">
  <p>
    The list below is fetched from a local JSON file that is created by 11ty and
    fetched via Svelte!
  </p>
  <ul class="list-disc ml-8 mt-2">
    {#each navigation as { text, link }}
      <li>
        <a class="block underline" href={link}>{text}</a>
      </li>
    {/each}
  </ul>
</div>
<div class="mt-16">
  <p>
    The content below is a svelte store and will stay in sync even when you
    update via other Svelte instances!
  </p>
  <p class="text-2xl">{$message}</p>
</div>
