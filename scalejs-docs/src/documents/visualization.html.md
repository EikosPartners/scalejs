---
title: "ScaleJS Docs"
isPage: true
styles: ["highlight.css"]
---

<script src="visualization/visualizationdemo-1.0.1.js" type="text/javascript"></script>

# Visualizations

An autocomplete extension for scalejs based on [D3](http://d3js.org/). This extension provides a way to use select2 and many of its advanced features while still following scalejs patterns. The code is freely available on [GitHub](https://github.com/lisovin/scalejs.visualization-d3).


<div id="visualization-example" ></div>



## Examples

### Simple Binding

```javascript
sunburst: {
    data: this.flareJS,
    idPath: 'name',
    colorPath: "shade",
    colorPalette: observable('PuBu'),
    enableZoom: true,
}
```

### Complex Binding

```javascript
visualizations: {
    type: observable('sunburst'),
    data: this.flareJS,
    maxVisibleLevels: observable(3),
    levels: [{
        colorPalette: ["#88ff88", "#00ff00", "#008800"]
    }, {
        colorPalette: ["#ff8888", "#ff0000", "#880000"]
    }, 'children', {
        childrenPath: 'children',
        colorPalette: this.colorPalette2
    }, {
        colorPalette: 'PRGn'
    }, {
        colorPalette: ["#d7191c", "#fdae61", "#ffffbf", "#a6d96a", "#1a9641"]
    }],
    idPath: 'id',
    childrenPath: 'children',
    areaPath: 'x',
    colorPath: 'x',
    colorPalette: observable('PuBu'),
    zoomedItemPath: observable([]),
    selectedItemPath: observable([]),
    heldItemPath: observable([]),
    enableZoom: true,
    enableTouch: true,
    sortBy: this.sortByFunction,
    fr: 5,
    parentFr: 1 / 2,
    levelsFr: [1, 1, 1, 1]
}
```


## Features

### Dynamic Visualization Switching

The same data can be rendered using multiple visualizations that can be switched in real time by pushing the names of different visualizations into an observable bound to the ```type``` property.

### Observable Output

Anything that the user holds, selects, or zooms to, is accessable through the ```heldItemPath```, ```selectedItemPath```, or ```zoomedItemPath``` observables, and items can be pushed to these observables from the viewmodel as well to manipulate the visualization.

### Adaptive Input

The colors and areas of the nodes within each visualization will be calculated based on values given in each object. The paths to these objects are specified using the ```areaPath``` and ```colorPath``` parameters.

### Hierarchical Data

This extension supports infinite levels of hierarchical data. Simply specify a ```childrenPath``` as a string, and the binding will parse your data and display all levels  possible.

### Dynamic Data Loading

The ```data``` parameter instead of taking an array can also take an observable to easily display static or dynamic data.

## Installation

Just install [this nuget package](https://www.nuget.org/packages/scalejs.visualization-d3/)