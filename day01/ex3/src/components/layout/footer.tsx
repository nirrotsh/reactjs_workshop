import React from 'react'

interface IFooterProps {
    height:string
}

export const AppFooter = (props:IFooterProps) => {
    let footerStyle = {
        background: "silver",
        height: props.height
    }
    return(
        <div style={footerStyle as any}>Footer</div>
    );
};