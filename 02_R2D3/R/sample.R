# install r2d3
# devtools::install_github("rstudio/r2d3")

library(r2d3)
r2d3(data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20), script = "barchart.js")

# disable shadow DOM
options(r2d3.shadow = FALSE)

# Svelte
r2d3(data, script = "index.js", #js output from svelte
     css = "index.css", #css output from svelte
     container = "div", #svelte points to div
     elementId= "app",  #svelte main div id is app
     viewer = "browser")#view output in browser


