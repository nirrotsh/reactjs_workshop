import ReactDOM from 'react-dom'
import React from 'react'
import {AppHeader} from './components/layout/header'
import {AppContent} from './components/layout/content'
import {AppFooter} from './components/layout/footer'

const appStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column"
}

const App = () => (
    <div style={appStyle as any}>
        <AppHeader height='4em'/>
        <AppContent />
        <AppFooter height='2em'/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById('app'));