# React.js Workshop


## Day 1, Excersize 2: First React Component
By Low and Custome, our first foray into a new framework / language must be an **Hello World** application.
In this excersize we create such an application, but with a fully working development enviroment - that will serve us for the rest of the workshop.

#### Assumptions:
 - Fully working enviromrnt from the end of [exercise 1][RWS_EX1]
 - If you downloded it from GIT: Install the global tools described in [exercise 1][RWS_EX1] and do `npm install` to install all the packages 

### Step1: Installing React dependencies
First we need to install React and ReactDom and their type definitions

```sh
npm install --save react @types/react react-dom @types/react-dom 
```
Open your `packages.json` and make sure they appear the "dependencies" section

### Step2: Creating the Greater component
under the "src" folder create a "components" folder - this will contain all of our components.
Under it create a new component file: `greeter.tsx`

The folder tree will look like this:
<div>|-src </div>
<div>&nbsp; &nbsp;|-index.tsx</div>
<div>&nbsp; &nbsp;|-components</div>
<div>&nbsp; &nbsp;&nbsp; &nbsp;|-greater.tsx</div>

in the greater.tsx file
- import react
- create a react component that emits Hello World
    - make sure the component is exported - as we will use it in the index.tsx file

```
//greater.tsx
import React from 'react'

export const greater = () => (<h3>Hello World</h3>); 
```

### Step3: Rendering our component
open the index.tsx file (which should be empty.
- import react and reactDom
- import our greater component
- use reactDOM to render our component into the div with ID=app in our application
```
//index.tsx
import ReactDOM from 'react-dom'
import React from 'react'
import {Greater} from './components/greater'

ReactDOM.render(<Greater />, document.getElementById('app'));
```


Run the development server. In the command line type:
```sh
npm start
```
Make sure no errors are thrown
Open your web browser: http://localhost:3000/  - you should see a page with the iconic "Hello World" showing.

<hr/>
<em>Congratulations,</em><br/>
<em>You just created your first react component and rendered it.</em>
<hr/>


   [RWS_EX1]: <https://github.com/nirrotsh/reactjs_workshop/tree/master/day01/ex1>
   
