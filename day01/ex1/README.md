# React.js Workshop

This is the code and practical companion to my React.js + Typescript workshop.
Since this is based on a rolling exercise (creating a web-based incident management), each exercise will be stored in its own Git Branch.

#### Assumptions:

 - Development on windows machine (windows 7 SP1 or above)
 - Node.js 6.10.3
 - Typescript 2.3 or above
 - Webpack 2 and above

## Day 1, Exercise  1: Hello World

In this exercise, we lay down the foundation to the rest of the workshop by setting up a fully working development environment - that we will expand and build upon in the rest of the workshop.

### Step1: Install Node.js
We will use [NVM Windows] to install node.js - because it allows us to control the version of Node.js
1. Download latest version [from here][Download NVM Windows from here],  select to download the latest `nvm-setup.zip` file.
2. Extract and run the `nvm-setup.exe`, accept license and all default settings in the installer.
3. open command line (Press windows start, then type 'cmd' and press enter).
4. In the command line list all available versions by typing "nvm list available"
```sh
c:\> nvm list available
```
5. Install node 6.10.3 64bit, and select it as the active version
```sh
c:\> nvm install 6.10.3 64
c:\> nvm use 6.10.3
```
6. Verify Node.js is installed and have the correct version
```sh
c:\> node --version
c:\> npm --version
```


### Step2: Initializing the project
1. Create a new folder for the project and cd into it
2. type "npm init" to start the wizard to generate the `package.json` file
```sh
C:\> mkdir c:\projects\situator_web
C:\> cd c:\projects\situator_web
C:\projects\situator_web> npm init
```
3. Accept the default in any step (or modify it to suite your needs)
4. Open the created `package.json` file and examine it.


### Step 3:  Setting the development environment
* Create a folder named “src” under the project root – this is where our source code will be located
* Add typescript support
    * Globally, to invoke tsc commands: `“npm install typescript –g”`
         * Invoke `“tsc –version”` in command line to verify you have ts 2.3 or above
    * As dev-dependency, so it can be invoked by webpack: `“npm install typescript  --save-dev”`
* Add Babel and relevant targets as dev dependencies:  `“npm install babel-core babel-preset-es2015 babel-preset-react --save-dev”`
    * This will install babel, babel translation module to ES2015 & Babel react-compiler
* Add WebPack as global dependency (so we can invoke packaging manually): `“npm install webpack –g”`
* Install webpack and relevant loaders as dev-dependencies: `“npm install webpack babel-loader ts-loader source-map-loader webpack-dev-server --save-dev”`
    * Installs loaders for:
        * Babel
        * Typescript
        * Loader to create source-maps for the typescript files and embed them in the generated JavaScript – allows to debug our original typescript in browser
        * Webpack development web server


### Step 4: Create the configuration files
**Add a new `.babelrc` configuration file. Make its content to:**
```
{
   "presets": ["es2015", "react"]
}
```

**Add a `tsconfig.json` typescript compiler configuration file. Make its content to:**
```
{
    "compilerOptions": {
        "outDir": "./ts-build/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "es6",
        "target": "es6",
        "allowSyntheticDefaultImports": true,
        "jsx": "preserve",
        "baseUrl": "./src",
        "strict": true
    },
    "exclude": [
    "node_modules"
  ]
}
```
The above options tells TypeScript compiler to
* Set the output directory to “ts-build”. Will be ignored by webpack as compiling is done in memory pipeline.
* Generate source maps – to help debugging
* Do not allow implicit “any” types. TS will not try to convert an untyped members to Any and will generated compiler error. Best if we starting new project from scratch.
* Generate ES6 (ES2015) compatible JavaScript
* Allow importing non-typed javascript library as default imports (we will explain about default imports later – but this simplifies integration with native JavaScript libraries that do not have TS type definitions)
* Will preserve the JSX content and do not compile it (it will be compiled by Babel-React later in the pipeline)
* Set the base folder to look for source files to “src”
* Generate “strict” JavaScript
* Exclude the “node_modules” folder – we do not want to compile it (not really necessary with the BaseUrl set to src, but just in case)

**Create a webpack configuration file: `webpack.config.js` and set its content to:**
```
const webpack = require('webpack')
const path = require('path')

module.exports = {
  // put sourcemaps inline
  devtool: 'eval',

  // entry point of our application, within the `src` directory (which we add to resolve.modules below):
  entry: [
    'index.tsx'
  ],

  // configure the output directory and publicPath for the devServer
  output: {
    filename: 'app.js',
    publicPath: 'dist',
    path: path.resolve('dist')
  },

  // configure the dev server to run
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },

  // tell Webpack to load TypeScript files
  resolve: {
    // Look for modules in .ts(x) files first, then .js
    extensions: ['.ts', '.tsx', '.js'],

    // add 'src' to the modules, so that when you import files you can do so with 'src' as the relative route
    modules: ['src', 'node_modules'],
  },

  module: {
    loaders: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') }
    ]
  },
}
```

### Step 5: Creating the html skeleton source files
Create an `index.html` file in the root directory of your project. Set its content to:
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Situator Web</title>
    </head>
    <body>
        <!-- React will inject its content here -->
        <div id="app"></div>

        <!-- Main -->
        <script src="./dist/app.js"></script>
    </body>
</html>
```
Note couple of things:
* The div with the “app” ID will be where React will inject its content. The ID name is arbitrary, and you can have multiple entry elements – but we build our entire application as React component. The HTML will not change much on later steps – as most of the work will be done in React components that will be injected to the root “app” div.
* The app.js file is the bundle webpack is generating. It is located at the root of the “dist” folder
* Where are the react JavaScripts? – webpack will handle their dependency – they will be packed as part of the bundle, making your application independent of react versions.

### Step 6: Creating an empty React root component file
Create an empty file called `index.tsx` under the src folder.
The “tsx” postfix mark it as typescript file that supports react JSX format.

You can verify your configuration by running
```sh
C:\projects\situator_web> webpack
```
in the command line in the project root directory - and verify it builds correctly.

###Step 7: Setting the NPM start script to start the webpack development web server
Open your `package.config` file.
* If it does not have a scripts property add it as a json object(“scripts”:{ } )
* If you do not have a “start”  scripts sub property, create it.
* Set the start script content to:  "webpack-dev-server“

So the your “package.config” should be like:
```
{  
   … ,
   "scripts": {
         "start": "webpack-dev-server"  
    },
   …
}
```

In the command line type:
```sh
npm start
```
Make sure no errors are thrown
Open your web browser: http://localhost:3000/  - you should see a blank page with the set title and no console errors.

<hr/>
<em>Congratulations,</em><br/>
<em>you have a fully working development environment and are ready to start your first React module</em>
<hr/>


   [NVM Windows]: <https://github.com/coreybutler/nvm-windows>
   [Download NVM Windows from here]: <https://github.com/coreybutler/nvm-windows/releases>
