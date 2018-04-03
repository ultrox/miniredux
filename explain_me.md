Selectors are just convinient functions that takes piece of the state from the
store

Selectors => helper functions - not part of redux

**use:**
look up and retrieving snippets of data from store into your component

**why:**
help cope with derived and related data allowing Redux to store the minimal possible state.



### What is derived data:

Computing new data based on original data available either in store(in redux
context), or database.

Render users formal name:
  =>  Mr. Barack Obama 
  =>  Ms. Merlin Moonro

### Why not just compute it in the render method in component?

Because it will get processed and re-evaluate on every new render

A lot of people doing this mapStateToProps;

