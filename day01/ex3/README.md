# React.js Workshop

## Day 1, Exercise 3: The App Shell
This workshop will be done as a set of small iterations.

Each Iteration will driven by a set of requirements that simulates a real development process.

The application we are building will be used to tell a user (e.g. a security guard or maintenance employee) 
- what are his/hers assigned tasks, help him/her to report on them 
- gives him/her all details of an incident that relates to the task and give him/her situational awareness on the overall picture around him/her
- Allow him/her report on new incident

#### Assumptions:
 - Fully working environment from the end of [exercise 2][RWS_EX2]
 - If you downloaded it from GIT: Install the global tools described in [exercise 2][RWS_EX2] and do `npm install` to install all the packages

### Requirements
So we start by stating our requirements for this phase:

We start by building the app main layout. We will use the classic 3 panes layout:

- Header: Always docked to top, fills the full width of screen and have a fixed height of 4em. 
    - The content of the header is going to be mostly constant during the application lifetime.
- Footer: Always docked to bottom, fills the full width of screen and have a fixed height of 2em.
    - The content of the footer is going to be mostly constant during the application lifetime.
- Body: fills the full width of screen fill all the height between header & footer
    - The body content will be dynamic and changes based on user activity / server updates
Must be scrollable, as the content might overspill window size

The HTML code is also available in the [Layout.html][RWS_EX3_DEMO] in this folder.

You can see a static web page demonstrating how the application should look [here][RWS_EX3_JSBIN] 



### Design
What you should do now is to identify the required components and their relations.

1. First of all we want an Application component that will wrap all the panes.
2. Next we want each pane to be its own component – since they will be developed and have functionality that is individual to each pane. So in reality, if we split it to 3 different components, a different developer can work on each component without stepping on each-other work.
Also we might be able to re-use those components in other pages / applications.

So the component tree here will look something like this:
- | App component
    - | AppHeader component
    - | AppBody component
    - | AppFooter Component

The header/footer and body should not really do anything right now except put some visual queues on screen for their existence (e.g. some text and different background color).
The body component will also contain a large div inside to prove it can be scrolled.

Think also a little bit about reusing those components as the 3 panes application structure is very common. 

Think about what will be changed across applications.

We will not do an over-engineering here, but at the very least, we want our components to accept some styling elements from the parent “application” component – most importantly is the height for the header & footer.

To do this we want to accept a “theme” prop in each of those components (header/body/footer) that allows it to accept a styling object and extract and use the styles it wants – overriding its own default styles.
"Theme" will be a collection of well known style definitions

#### Some Tips 
1. If you are not an HTML/CSS expert and want the basic structure and styles for this, you can find one (Like all things in HTML/CSS there are multiple ways to do this) in a file called layout.html in the exercise code directory on GitHub.

2. If you want to include a style object as the content of your style attribute you must cast it to ANY, otherwise typescript will complain (since by configuration we do not allow 

3. You will need to set style properties on the <body> and <div id=‘app’> manually, using internal or external stylesheet – since they are not part of REACT.
There is an escape hatch that you can use (the REF callback function ) to access the DOM element directly – but it breaks component encapsulation

### Implementation Steps
1. Remove the Greeter.tsx file, we will not need it anymore
2. Create a new folder `layout` under the `components` folder. This is where we will store our layout components
3. Under the `layout` folder create 3 files, `header.tsx`, `content.txt` and `footer.tsx` to contain the header,content and footer components
4. Create each component, with its own style. Make it recieve the required styles through props and override local values.
5. Add an application component in `index.tsx` and make it render the three components you created.
6. Create local style sheet in `index.html`for the html,body and the #app elements


   [RWS_EX2]: <https://github.com/nirrotsh/reactjs_workshop/tree/master/day01/ex2>
   [RWS_EX3_DEMO]: <https://github.com/nirrotsh/reactjs_workshop/tree/master/day01/ex3/layout.html>
   [RWS_EX3_JSBIN]: <http://jsbin.com/qadewe/2>
   
