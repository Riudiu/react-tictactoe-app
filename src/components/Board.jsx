import React, {useState} from 'react'
import { Square } from './Square';
/** @jsxImportSource @emotion/react */


export function Board() {
    // useState Hook - [변수 이름, 해당 변수의 state를 정하는 함수] = useState();
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const newSquares = squares.slice();
        newSquares[i] = "X";
        setSquares(newSquares);
    }
 
    function renderSquare(i) {
        // Props - 부모 컴포넌트 -> 자식 컴포넌트로 넘어가는 데이터, 
        // 읽기 전용으로 변하게 하고자 한다면 부모 컴포넌트에서 state가 바뀌어야 한다. 
        return <Square value={squares[i]} 
                    onClick={() => handleClick(i)} />;
    } 

    return (
        <div>
            <div 
                css = {{
                    marginBottom: 10
                }}
            >"Next player: X, O"</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
