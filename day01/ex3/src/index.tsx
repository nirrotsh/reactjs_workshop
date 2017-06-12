import ReactDOM from 'react-dom'
import React from 'react'
import {defaultTheme} from './components/layout/theme'
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
        <AppHeader height='3em' theme={defaultTheme} />
        <AppContent />
        <AppFooter height='2em' theme={defaultTheme}/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById('app'));