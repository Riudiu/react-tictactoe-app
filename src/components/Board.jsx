import React, {useState} from 'react'
import { Square } from './Square';
/** @jsxImportSource @emotion/react */


export function Board() {
    // useState Hook - [변수 이름, 해당 변수의 state를 정하는 함수] = useState();
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(false);

    const winner = caculateWinner(squares);
    let status;
    
    if (winner) {
        status= `Winner: ${winner}`;
    } else {
        status= `Next player: ${xIsNext ? "X" : "O"}`;
    }

    const handleClick = (i) => {
        const newSquares = squares.slice();
        console.log('newSquares', newSquares);
        console.log('newSquares[i]', newSquares[i]);
        // 클릭 무효화
        if (caculateWinner(newSquares || newSquares[i])) {
            return;
        }

        newSquares[i] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(current => !current);
    }
 
    function renderSquare(i) {
        // Props - 부모 컴포넌트 -> 자식 컴포넌트로 넘어가는 데이터, 
        // 읽기 전용으로 변하게 하고자 한다면 부모 컴포넌트에서 state가 바뀌어야 한다. 
        return <Square value={squares[i]} 
                    onClick={() => handleClick(i)} />;
    } 

    function caculateWinner(squares) {
        // 승자가 결정되는 경우의 수 나열
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let idx in lines) {
            const [a, b, c] = lines[idx];
            if (squares[a] 
                && squares[a] === squares[b] 
                && squares[a] === squares[c]) 
            {
                return squares[a];  // winner 리턴
            }
        }
        return null;
    }

    return (
        <div>
            <div 
                css = {{
                    marginBottom: 10
                }}
            > {status} </div>
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
