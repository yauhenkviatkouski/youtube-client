

## Youtube-client
This application is made as part of learning at RSSchool

#### deploed:
https://yauhenkviatkouski.github.io/youtube-client/  
___
### Task requirements


- [x] User sees a search box as he starts up the app.  
- [x] The app processes the request to YouTube REST API and displays loaded clips as a horizontal list  
of items.  
- [x] The horizontal list can be scrolled with a swipe (on a desktop via mouse swipe). Swipe should be  
animated, e.g. user can click and pull the list sideways. Paging event should be triggered when  
mouseUp is released. If a user makes X quick swipes the app should list X pages. The number of clips  
on the page depends on its size (1 to 4 clips per page).  
- [x] The additional navigation buttons (paging control) are set at the bottom of the page.  
- [x] As the app lists the pages it should load new data in chunks ( 15 clips per chunk). It would be good  
to manage "smooth" data loading which means preloading data chunks in advance to emulate  
infinite scrolling experience.  
Requirements  
- [x] Perfect for latest Chrome;

- [x] Support at least one mobile browser (Android);

- [x] Clips (aka components) are listed pagely. Resizing the page increases/decreases the number of  
clips on a page. After a resize event the first left clip from the previous state should be present in the  
new state (but its position can be different). The further resizing would take into the account the first  
left component from the new state.

- [x] During a mousedown event on a paging component the tooltip with page number should pop-up.

- [x] Your complete app should be uploaded to github pages (gh-pages branch) or to any other hosting.

- [x] Each clip-component should provide the information about a single YouTube clip ….

- [x] HTML rendering via JavaScript (a page is loaded without html tags inside document.body);  
- [x] CSS3 Animations with Transitions & Transforms;  
- [x]  Use of jQuery and other frameworks and libs is forbidden (except for lodash)  
- [x] .editorconfig is required

- [x] eslint is required  
- [x] eslint-config-airbnb-base is required  
- [x] JS code should be split into modules and assembled by Webpack. Usage of babel and babel-  
loader is required

- [x] Repository Guidelines violation  
- [x] Commit Message Guidelines violation    
- [x] Pull Request Guidelines violation  
- [x] eslint-config-airbnb-base errors or warnings   
- [x] Animation is not smooth   
- [x] Functional requirements are met +100 points

