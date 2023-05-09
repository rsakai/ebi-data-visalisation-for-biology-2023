<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  let data;
  onMount(async () => {
    data = await d3.csv("../sample_data/iris.csv");
    // data = await d3.csv("../sample_data/iris.csv").then((data) => {
    //   return data.map((d) => {
    //     return {
    //       petal_length: +d["petal.length"],
    //       petal_width: +d["petal.width"],
    //       sepal_length: +d["sepal.length"],
    //       sepal_width: +d["sepal.length"],
    //       variety: d["variety"],
    //     };
    //   });
    // });

    console.log("data", data);
  });
</script>

<main>
  Iris data
  <div>
    {#if data}
      {JSON.stringify(data)}
    {/if}
  </div>
</main>

<style>
</style>
