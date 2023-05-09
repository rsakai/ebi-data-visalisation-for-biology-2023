<script>
  import { onMount } from "svelte";
  import { csv } from "d3-fetch";
  import Scatterplot from "./lib/Scatterplot.svelte";

  let data = undefined;

  onMount(async () => {
    console.log("load data");
    data = await csv("../sample_data/iris.csv").then((data) => {
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
  });
</script>

<div class="container">
  <!-- {JSON.stringify(data)} -->
  <!-- test -->

  <Scatterplot
    {data}
    xAccessor={(d) => d.petal_length}
    yAccessor={(d) => d.petal_width}
  />
</div>

<style>
  .container {
    background-color: lightgray;
    width: 100vw;
    height: 100vh;
  }
</style>
