# React.js Workshop

This is the code and practical companion to my React.js + Typescript workshop.
Since this is based on a rolling excersize (creating a web-based incident management), each excersize will be stored in its own Git Branch.

#### Assumptions:

 - Development on windows machine (windows 7 SP1 or above)
 - Node.js 6.10.3
 - Typescript 2.3 or above
 - Webpack 2 and above
 
## Day 1, Excersize 1: Hello World

By Low and Custome, our first foray into a new framework / language must be an **Hello World** application.
In this excersize we create such an application, but with a fully working development enviroment - that will serve us for the rest of the workshop.

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


----


   [NVM Windows]: <https://github.com/coreybutler/nvm-windows>
   [Download NVM Windows from here]: <https://github.com/coreybutler/nvm-windows/releases>