# Notes for React
## Note for Cloning React Projects
You **MUST** run `npm install restore` on any React project that has `/node_modules` in `.gitignore`, or **it will refuse to even start**.
## Main React Files
React relies on several files just to achieve the template. They have a flow to them, as follows:
1. `public/index.html`, the traditional HTML file is basically empty aside from a notice to anyone with JS disabled that they need it on, and an empty div with an ID of "root". This div serves as the entry point for React (where it renders everything).
2. `src/index.js` targets and populates the "root" div in the index.html file with the application. On line 7 of the template, you can see the `root` variable being assigned to `ReactDOM.createRoot()`, which pulls a `document.getElementById()` in order to target our empty div. This binds the root of the React application to that div. Then, inside of that div, on line 8, `root.render()` puts the `<App />` component (defined in step 3) inside of the root div. 
3. `src/App.js` serves as the main "web page", pulling together all of the other components (if any) and setting their order, etc. Many other files may be referenced by this file, but this is the "entry point", similar to `Main()` in the JS console.

### Other Notable Files
- `src/App.css` serves as your primary CSS file for the application.

## JSX
JSX is a hybrid language of HTML and JavaScript. It's basically just HTML, however you can use braces to render a value or expression from JavaScript. IE:

`let myName = "Joe";`
`<p>Hello, {myName}!</p>`

## Functional vs Class-Based React
React supports two syntaxes for components, functional and class-based. Functional is more concise, but allows for less control over component lifecycle in a readable manner. Class-based takes more code to do the same thing, but gives much more control over lifecycle. 

## State
State represents properties of a component that are integral to that component's behaviour or appearance. This means that if state is changed, it will trigger a re-rendering of the component, while if a "normal" local variable is changed it will not.