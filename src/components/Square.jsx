import React from 'react'
/** @jsxImportSource @emotion/react */

export function Square({onClick, value}) {
    return (
        <button 
            css={{
                width: 120,
                padding: 32,
                backgroundColor: 'skyBlue',
                fontSize: 24,
                borderRadius: 20,
                margin: "1.5px"
            }}
            onClick={onClick}
        >
            {value}
        </button>
    );
}