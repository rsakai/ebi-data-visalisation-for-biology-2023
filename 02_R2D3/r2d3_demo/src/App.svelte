<script>
  // @ts-nocheck
  import Counter from "./lib/Counter.svelte";

  // @ts-ignore
  $: appData = typeof data !== "undefined" ? data : [];
</script>

<main>
  <h1>Hello world - test 2</h1>

  <div class="card">
    <Counter />
  </div>

  {JSON.stringify(appData)}
</main>

<style>
  main {
    background-color: steelblue;
  }
</style>
