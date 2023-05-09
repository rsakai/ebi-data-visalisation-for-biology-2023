<script>
  import { max, bin, extent } from "d3-array";
  import { scaleLinear } from "d3-scale";

  export let data;
  export let xAccessor;

  export let margins = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  let width = 500;
  let height = 500;

  let binning = bin();
  let bucket;
  let barWidth = 20;

  let xScale;
  let yScale;

  $: {
    if (data) {
      bucket = binning(data.map(xAccessor));

      let xTicks = bucket.map((d) => d["x0"]);
      xTicks.push(bucket[bucket.length - 1]["x1"]);

      xScale = scaleLinear()
        .domain([0, xTicks.length])
        .range([margins.left, width - margins.right]);

      yScale = scaleLinear()
        .domain([0, max(bucket, (d) => d.length)])
        .range([height - margins.bottom, margins.top]);

      barWidth = xScale(1) - xScale(0);
    }
  }
</script>

<svg {width} {height}>
  <g class="bar-group">
    {#if bucket}
      {#each bucket as d, i}
        <rect
          x={xScale(i) + 2}
          y={yScale(d.length)}
          width={barWidth - 4}
          height={yScale(0) - yScale(d.length)}
        />
      {/each}
    {/if}
  </g>
</svg>
