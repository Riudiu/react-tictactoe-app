import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Square() {
    return (
        <button 
            css={{
                padding: 32,
                backgroundColor: 'red',
                fontSize: 24,
                borderRadius: 20,
            }}
        >
            Square
        </button>
    );
}