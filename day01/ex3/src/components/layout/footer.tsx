import React from 'react'
import {ITheme} from './theme'

interface IFooterProps {
    height:string,
    theme:ITheme
}

export const AppFooter = (props:IFooterProps) => {
    const theme = props.theme;
    
    const footerStyle = {
        background: theme.backColor,
        color: theme.foreColor,
        height: props.height,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const custLogoStyle = {
        height:props.height,
        margin: 0,
        padding: 0
    }

    const qognifyLogoStyle ={
        height:'1.2em',
        verticalAlign:'middle',
        marginRight:'0.3em'
    }

    return(
        <div style={footerStyle as any}>
            <a href={theme.customerSiteUrl} style={{margin:0, padding:0}}>
                <img style={custLogoStyle} src={theme.customerLogoUrl} alt="customer logo" />
            </a>
            <div>
                <span>Powered By: </span>
                <a href="//www.qognify.com/">
                    <img style={qognifyLogoStyle} src="./src/images/qognify-logo.png" alt="Qognify" />
                </a>
            </div>
        </div>
    );
};