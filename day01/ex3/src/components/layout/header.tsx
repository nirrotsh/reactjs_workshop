import React from 'react'

interface IHeaderProps {
    height:string
}

export const AppHeader = (props:IHeaderProps) => {
    let headerStyle = {
        background: "silver",
        height: props.height
    }
    return(
        <div style={headerStyle as any}>Header</div>
    );
};