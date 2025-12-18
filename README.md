# React Element Rendering (Without JSX)

This project demonstrates how to render React elements using `React.createElement()` instead of JSX. The code creates two heading elements (`h1` and `h2`) and wraps them inside a `div`, which is then rendered into the DOM using `ReactDOM.createRoot()`.


## Project Output
The following structure is rendered by React:

```html
<div id="parents" class="elem">
  <h1>hi from React</h1>
  <h2>this is h2</h2>
</div>
