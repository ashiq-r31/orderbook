# SOLUTION_ASH_RAHMAN

## Reasoning

This is a simple project created with create-react-app with as few dependencies as possible. I've used mostly React and Javascript native APIs to implement the orderbook. In case I've gotten the requirements wrong, I'm currently assuming:

- The rows on the first half of the screen displays `asks` in ascending order
- The banner in the middle displays the average of the `lowest ask` and the `highest bid`
- The rows on the second half of the screen displays `bids` in descending order

A few things you'll notice in the codebase:

- I haven't used an html `table`. Mostly due to expediency: overriding default table styles can be tedious. In addition, using `divs` has allowed me to make the layout somewhat responsive.
- CSS styles are mostly global, some basic layout and helper classes.

For future consideration:

- As application scales, the state management can be dealt with Redux and Redux Saga. Redux is great as a single source of truth, a persistent data store with getters and setters to update state. We'll need Redux if we anticipate application state being shared across multiple components where passing props levels deep or setting internal state may bloat our components. In additional, Redux-sagas is pretty good library to handle side effects.
- As the complexity of the UI grows, components are going to split into general feature components and shared components (forms, tables, layout, etc). The CSS in the shared components should do most of the heavy lifting whether we're building it ourselves or adding a dependency like Material UI; In most cases we need to see the final mockups to make a decision. Global styles can be relegated to adding resets, grid layout, typography and other helpers. A preprocessor like Sass or LESS should help extend CSS's abilities with variables, mixins, functions and more.

## Getting started

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
