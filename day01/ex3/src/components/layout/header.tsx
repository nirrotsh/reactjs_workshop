import React from 'react'
import {ITheme} from './theme'

interface IHeaderProps {
    height:string,
    theme:ITheme
}

export const AppHeader = (props:IHeaderProps) => {
    const theme = props.theme;

    const headerStyle = {
        backgroundColor: theme.backColor,
        color: theme.foreColor,
        height: props.height
    }

    const menuButonStyle = {
        width: '2em',
        height: '2em',
        position: 'relative',
        margin: '0.75em',
        cursor: 'pointer'
    }

    const menuBurgerLineStyle = {
        display: 'block',
        height: '0.25em',
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: '0.25em',
        marginBottom: '0.37em',
    }

    return(
        <div style={headerStyle as any}>
            <div style={menuButonStyle as any}>
                    <span style={menuBurgerLineStyle as any}></span>
                    <span style={menuBurgerLineStyle as any}></span>
                    <span style={menuBurgerLineStyle as any}></span>
                </div>
        </div>
    );
};