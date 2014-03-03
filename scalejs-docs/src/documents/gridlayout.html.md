---
title: "Layout"
isPage: true
---

# Grid Layout

<hr>

[Grid Layout Sample](http://scalejs.com/scalejs-examples/CssGridLayout/CssGridLayout/) |
[Grid Layout GitHub](https://github.com/lisovin/scalejs-examples/tree/master/CssGridLayout)

<hr>

One of the most frustrating aspects of developing in HTML5 is creating the layout of your app.
Due to the nature of CSS, conceptually simple layouts are hard, and complex layouts are near impossible.
We decided to adopt the [CSS Grid Layout Module](http://www.w3.org/TR/css-grid-1/) pattern by
creating a polyfill of Microsoft's Grid Layout.
Although the polyfill can be used as a stand-alone script for basic HTML5 applications, here we will
explain how to use the CSS Grid Layout in your own scalejs app.

Install the __scalejs.layout-cssgrid__ extension with NuGet to import the __layout__ namespace.

<br>

## CSS that makes sense

Use CSS to create grids without the frustration of using CSS - the grid layout is very easy to grasp,
and does not take guess-work to position things correctly. 

If you developed for IE then you may already know how to use the `-ms-grid` styles attribute.

<br>

### HTML

After [composing your UI](./composition.html) to contain all of the regions it needs, you can easily define where they are positioned
by applying some styles to them. 

##### Example: Regions in a view
```xml
<div id="main_template">
    <div id="main">
        <div id="left">Navigation</div>
        <div id="leftSplitter"></div>
        <div id="header">Header</div>
        <div id="headerSplitter"></div>
        <div id="content1">Content 1</div>
        <div id="footer">Footer</div>
    </div>
</div>
```

This UI contains some typical regions you'd expect to find in an app such as left section, a header, content, and a footer.  

Left Splitter and Header Splitter are margin areas which lie inbetween regions, but can also be [splitters](./gridlayout.html#splitters).

<br>

### main

We will inspect the `#main` div and discuss how it sets up the Grid Layout.

##### Example: Setting up the Grid
```
#main {
    display: -ms-grid;
	-ms-grid-columns: 300px auto 1fr 1fr; 
	-ms-grid-rows: 100px auto 1fr 100px; 
	width: 100%;
    height: 100%;
    margin: 0px;
}
```

In order to enable a grid layout within a div or region, set its `display` attribute equal to `-ms-grid`.
In this example, `#main` is a grid container with a 100% widgth and height and no margins so it takes up the entire window.

When setting up the grid, you also need to specify the rows and columns for the grid.
To create a grid that has 2 columns and 2 row, 
you would need to add `-ms-grid-columns: 1fr 1fr` and `-ms-grid-rows: 1fr` to the style of the grid.

In the above example, we have created a 4x4 grid.

The widths of the columns and height of the rows also need to be specified.
To create a fixed width or height, you can specify the it in pixels (px) or use auto to
indicate that the width fits to its content. You can also divide the remaining space into fractions using  the `fr` unit.

In the 2x1 example, each column is split to 1/2 of the width of the grid and there is one row.

In our 4x4 example, the first column has a fixed with of 300px, the second automatically
resizes to fit its content, and the last 2 take up 1/2 of the remaining space. 
Also, the first row is 100px, the second automatically sizes to its content, 
the third one takes up the remaining space, and the last row is 100px tall.

To create a full-page grid, add the following css.
```
html, body {
	margin: 0px;
	height: 100%;
	width: 100%;
}
```

##### Using the extension

To use our polyfill extension (replicate the grid behavior in non microsoft browsers) you must add the 'scalejs.layout-cssgrid' nuget package to your project. 

####### Limitations

Our extension has a few limitations compared to the full -ms-grid spec. For auto-width columns, members should have a defined width (either inline style or css), otherwise they will extend to far beyond their intended width. Additionally, grid elements that span multiple auto-sized rows or columns will result in incorrectly sized rows/columns.


