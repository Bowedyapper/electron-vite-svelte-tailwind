<script lang="ts">
  import { onMount } from 'svelte';
  import { storeItem } from '$lib/stores/main';
  import Main from '$components/Main.svelte';

  onMount(() => {
    console.log(storeItem);
  });
</script>

<Main text={$storeItem} />

<style lang="postcss">
  :global(body) {
    background-color: theme(colors.gray.800);
  }
</style>
