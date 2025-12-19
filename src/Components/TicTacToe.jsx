import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const TicTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);
    const isBoardFull = board.every(cell => cell !== null);

    const Click = (i) => {
        if (winner || board[i]) return;

        const newBoard = board.slice();
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) => (
        <div
            onClick={() => Click(i)}
            style={{ width: '100px', height: '100px', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '50px', color: 'white', borderRadius: '10px', margin: '5px', backgroundColor: 'blue' }}
        >
            {board[i]}
        </div>
    );

    const reset = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    let status;
    if (winner) {
        status = `Winner :- ${winner} 🎉`;
    } else if (isBoardFull) {
        status = "It's a Draw! 🤝";
    } else {
        status = `Player :- ${xIsNext ? 'X' : 'O'}`;
        // if (xIsNext) {
        //     status = "Player X's turn";
        // } else {
        //     status = "Player O's turn";
        // }
    }

    return (
        <Container className="mt-5">
            <h3>{status}</h3>
            <table>
                <tbody style={{ border: '2px solid black', borderRadius: '10px', padding: '10px', backgroundColor: 'skyblue' }}>
                    <tr>
                        <td>{renderSquare(0)}</td>
                        <td>{renderSquare(1)}</td>
                        <td>{renderSquare(2)}</td>
                    </tr>
                    <tr>
                        <td>{renderSquare(3)}</td>
                        <td>{renderSquare(4)}</td>
                        <td>{renderSquare(5)}</td>
                    </tr>
                    <tr>
                        <td>{renderSquare(6)}</td>
                        <td>{renderSquare(7)}</td>
                        <td>{renderSquare(8)}</td>
                    </tr>
                </tbody>
            </table>
            <button className='Button' onClick={reset}>Reset</button>
        </Container >
    )
}

export default TicTacToe