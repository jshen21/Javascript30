## Exercise 3: Update CSS Variables with JS

### Key Take-aways:

1. CSS variables: Variables in CSS should be declared within a CSS selector that defines its scope. For a global scope you can use either the `:root` or the `body` selector. Note: Custom property names are case sensitive — --my-color will be treated as a separate custom property to --My-color.
2. `document.querySelectorAll` returns array-like Nodelist, which has different (and much fewer) prototype properties from real Array. (`forEach` is included, but not `map`, `reduce`, etc)
3. funciton `handleUpdate` can't use arrow function if using `this` in the funciton, because that will make `this` reference to a wrong object (it's lexical environment which in this case will be `window`). Withouu arrow, `this` keyword in this function will reference the object where this fucntion is invoked which will be "input". 
4. `document.documentElement` returns the Element that is the root element of the document (for example, the <html> element for HTML documents and in this case `document.documentElement.style` for <style> elements).
5. `dataset` is the property to grab customized attibutes declared with `data-exampleName`: `dataset.exampleName`