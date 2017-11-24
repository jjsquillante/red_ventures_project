### Red Ventures Project
___

Visit URL: https://jjsquillante.github.io/red_ventures_project/

### PLEASE READ: 
1. Please reference the code within `/rvProject` as this was the code that developed the site and is the intended file structure. (the top level code was compiled by harp.js to static files + the final compiled file structure is kind of weird).
2. Due to the time constraint, I was unable to add any filter logic to update DOM based on AJAX results.
3. The modal is an AJAX request, so, if the modal is a tad bit slow to open, it's due to the site hosting the api (they throttle usage on free plans)
4. Structure of the pages are built on CSS grid and flexbox.
5. No dependencies, just vanilla JS.

### Structure
1. The code within `/rvProject` is structured as below:
	+ layout file that acts as the 'index', which brings together the partials.
	+ `js/` contains app.js
	+ `partials/` will contain partial for navigation and modal. 
	+ `style` contains css (desktop and mobile version).

#### Tasks
- [x] HTML/CSS from scratch
- [x] Vanilla JS for UI

#### TODO:
- [ ] Form Validation
- [ ] Update card grid based on filter results. (Filtering)
