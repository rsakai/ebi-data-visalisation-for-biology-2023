<script>
  // @ts-nocheck
  import Flower from "./lib/Flower.svelte";
  import { onMount, tick } from "svelte";

  const get_xy = function (idx) {
    let y = 25 + Math.floor(idx / 20) * 50;
    let x = 25 + (idx % 20) * 50;
    return [x, y];
  };
  console.log("App.svelte --- ");

  $: datapoints = [];
  onMount(() => {
    setTimeout(() => {
      datapoints = window.data;
    }, 0);
  });
</script>

<div>
  <svg width="1000" height="1000">
    {#if datapoints}
      {#each datapoints as datapoint, idx}
        <g transform="translate({get_xy(idx)[0]}, {get_xy(idx)[1]})">
          <Flower {datapoint} />
        </g>
      {/each}
    {/if}
  </svg>
</div>

<style>
  div {
    background-color: white;
    color: red;
  }
</style>
