import React from 'react'

export const AppContent = () => {
    let contentStyle = {
        flex: "1",
        overflow: "auto",
        background: "#fff"
    };

    return(
        <div style={contentStyle as any}>
            <div style={ {height:640, width:720, background:"#cc9999"} }>Content</div>
        </div>
    );
};