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
  <p>
    The list below is fetched from a local JSON file that is created by 11ty and
    fetched via Svelte!
  </p>
  <ul class="list-disc ml-24 mt-16">
    {#each navigation as { text, link }}
      <li>
        <a class="block underline" href={link}>{text}</a>
      </li>
    {/each}
  </ul>
</div>
<div class="mt-48">
  <p>
    The content below is a svelte store and will stay in sync even when you
    update via other Svelte instances!
  </p>
  <p class="text-24 mt-24">{$message}</p>
</div>
