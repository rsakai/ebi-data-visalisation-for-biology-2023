<script>
  import { onMount } from "svelte";
  import { csv } from "d3-fetch";
  import Scatterplot from "./lib/Scatterplot.svelte";
  import Barchart from "./lib/Barchart.svelte";

  let data;

  onMount(async () => {
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

  <!-- <Scatterplot
    {data}
    xAccessor={(d) => d.petal_length}
    yAccessor={(d) => d.petal_width}
  /> -->

  <Barchart {data} xAccessor={(d) => d.petal_length} />
</div>

<style>
  .container {
    background-color: lightgray;
    width: 100vw;
    height: 100vh;
  }
</style>
