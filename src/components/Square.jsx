import React from 'react'
/** @jsxImportSource @emotion/react */

export function Square({onClick, value}) {
    return (
        <button 
            css={{
                width: 120,
                height: 120,
                backgroundColor: 'skyBlue',
                fontSize: 24,
                borderRadius: 10,
                margin: "1.5px",
                border: '2px solid black',
                float: 'left',
            }}
            onClick={onClick}
        >
            {value}
        </button>
    );
}