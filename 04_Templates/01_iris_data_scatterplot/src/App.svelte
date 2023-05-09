<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import Scatterplot from "./lib/Scatterplot.svelte";

  let data;

  onMount(async () => {
    console.log("load data");
    data = await d3.csv("../sample_data/iris.csv").then((data) => {
      return data.map((d) => {
        return {
          petal_length: +d["petal.length"],
          petal_width: +d["petal.width"],
          sepal_length: +d["sepal.length"],
          sepal_width: +d["sepal.width"],
          variety: d["variety"],
        };
      });
    });
    console.log("data", data);
  });
</script>

<div class="container">
  {#if data}
    <Scatterplot
      {data}
      xAccessor={(d) => d.petal_length}
      yAccessor={(d) => d.petal_width}
    />
  {/if}
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
  }
</style>
