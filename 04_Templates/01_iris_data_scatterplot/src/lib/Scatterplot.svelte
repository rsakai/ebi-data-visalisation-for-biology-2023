<script>
  import * as d3 from "d3";

  export let data;
  export let xAccessor;
  export let yAccessor;

  export let margins = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  let width = 500;
  let height = 500;

  // value extents
  $: xExtent = [0, d3.max(data, xAccessor)];
  $: yExtent = [0, d3.max(data, yAccessor)];

  // scales
  $: xScale = d3
    .scaleLinear()
    .domain(xExtent)
    .range([margins.left, width - margins.right]);

  $: yScale = d3
    .scaleLinear()
    .domain(yExtent)
    .range([height - margins.bottom, margins.top]);
</script>

<!-- <svg bind:this={svg}> -->
<svg {width} {height}>
  {#if data}
    {#each data as point}
      <circle
        cx={xScale(xAccessor(point))}
        cy={yScale(yAccessor(point))}
        r="5"
      />
    {/each}
  {/if}
</svg>

<style>
  svg {
    background-color: white;
    /* width: 100%;
    height: 100%; */
  }

  circle {
    fill: orange;
    fill-opacity: 0.6;
    stroke: rgba(0, 0, 0, 0.5);
  }

  .tick line {
    stroke: #ddd;
    stroke-dasharray: 2;
  }

  text {
    font-size: 12px;
    fill: #999;
  }

  .x-axis text {
    text-anchor: middle;
  }

  .y-axis text {
    text-anchor: end;
  }
</style>
