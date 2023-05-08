# data-visualisation-for-biologi-2023

## 01 Data Wrangling

[Data wrangling essentials: comparisons in JavaScript, Python, SQL, R, and Excel](https://observablehq.com/@observablehq/data-wrangling-translations)

* Comparison of syntaxes among differnt languages
    * Filter rows
    * Select columns
    * Sort rows
    * Add new columns
    * Aggregate
    * ...


[Data wrangling with Arquero](https://observablehq.com/@observablehq/data-wrangling-with-arquero-from-r)

* This is a javascript library developed by Jeff Heer's group and this library follows the syntax of **dplyr** in R. If you are already quite familiar with tidyverse, it may worth going through the tutorials.
* Arquero uses their own `Table` object, which models each column as an array of values.


[Javascript Data Wrangling](https://observablehq.com/@uw-info474/javascript-data-wrangling)

* Nice tutorial using D3 functions to wrangle data.

### Basic principle

You want to organise the data into an array of objects where each item corresponds to a visual representation, so that you can render each item in a for loop in your visualisation. 


## 02 R2D3

There is an R package called [r2d3](https://rstudio.github.io/r2d3/) whihc helps integrate d3/web bases visualisation into R/Shiny app.  You can write D3 specific codes, but with Svelte output, you can crete javascript and css dependencies as described [here](https://rstudio.github.io/r2d3/articles/dependencies.html).

```r
# in R
r2d3(data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20), script = "barchart.js")
```

Getting started with a Svelte app, without Sveltekit

```bash
npm init vite
# give project name and select svelte
cd my_project
npm install
```

To export css and js file without the hash, change the `vite.config.js` file

```js
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
```

In R, you can link the Svelte output:
```r
# disable shadow DOM
options(r2d3.shadow = FALSE)

# Svelte
r2d3(data, script = "index.js", #js output from svelte
     css = "index.css",         #css output from svelte
     container = "div",         #svelte points to div
     elementId= "app",          #svelte main div id is app
     viewer = "browser")        #view output in browser
```




## 03 Observable

We have already seen some tutorials shared on [Obsevable](https://observablehq.com/). Great source of inspirations and examples for data visualisation.  