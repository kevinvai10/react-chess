import React, { useState } from 'react';
// import { Chess } from 'chess.js';
import Chessboard from 'chessboardjsx';
import './Chessboard.scss';

const Chess = require('chess.js');

const squareStyling = ({ pieceSquare, history }) => {
    const sourceSquare = history.length && history[history.length - 1].from;
    const targetSquare = history.length && history[history.length - 1].to;
  
    return {
      [pieceSquare]: { backgroundColor: 'rgba(255, 255, 0, 0.4)' },
      ...(history.length && {
        [sourceSquare]: {
          backgroundColor: 'rgba(255, 255, 0, 0.4)'
        }
      }),
      ...(history.length && {
        [targetSquare]: {
          backgroundColor: 'rgba(255, 255, 0, 0.4)'
        }
      })
    };
  };

const HumanVsHuman = (props) => {
  const [fen, setFen] = useState('start');
  const [dropSquareStyle, setDropSquareStyle] = useState({});
  const [squareStyles, setSquareStyles] = useState({});
  const [pieceSquare, setPieceSquare] = useState('');
  const [square, setSquare] = useState('');
  const [history, setHistory] = useState([]);
  const game = new Chess();

  // keep clicked square style and remove hint squares
  const removeHighlightSquare = () => {
    setSquareStyles(squareStyling({ pieceSquare, history }));
  };

  // show possible moves
  const highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                'radial-gradient(circle, #fffc00 36%, transparent 40%)',
              borderRadius: '50%',
            },
          },
          ...squareStyling({
            history,
            pieceSquare,
          }),
        };
      },
    );

    setSquareStyles({ ...squareStyles, ...highlightStyles });
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    setFen(game.fen());
    setHistory(game.history({ verbose: true }));
    setSquareStyles(squareStyling({ pieceSquare, history }));
  };

  const onMouseOverSquare = () => {
    // get list of possible moves for this square
    const moves = game.moves({
      square,
      verbose: true,
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    const squaresToHighlight = [];
    for (let i = 0; i < moves.length; i += 1) {
      squaresToHighlight.push(moves[i].to);
    }

    highlightSquare(square, squaresToHighlight);
  };

  const onMouseOutSquare = () => removeHighlightSquare(square);

  // central squares get diff dropSquareStyles
  const onDragOverSquare = () => {
    setDropSquareStyle(square === 'e4' || square === 'd4' || square === 'e5' || square === 'd5'
        ? { backgroundColor: 'cornFlowerBlue' }
        : { boxShadow: 'inset 0 0 1px 4px rgb(255, 255, 0)' });
  };

  const onSquareClick = () => {
    setSquareStyles(squareStyling({ pieceSquare: square, history }));
    setPieceSquare(square);

    const move = game.move({
      from: pieceSquare,
      to: square,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    setFen(game.fen());
    setHistory(game.history({ verbose: true }));
    setPieceSquare('');
  };

  const onSquareRightClick = () => setSquareStyles({ [square]: { backgroundColor: 'deepPink' } });

    return props.children({
        squareStyles,
        position: fen,
        onMouseOverSquare,
        onMouseOutSquare,
        onDrop,
        dropSquareStyle,
        onDragOverSquare,
        onSquareClick,
        onSquareRightClick,
    });
};
export default function Board() {
  return (
    <div className="chessboard">
      <HumanVsHuman>
        {({
          position,
          onDrop,
          onMouseOverSquare,
          onMouseOutSquare,
          squareStyles,
          dropSquareStyle,
          onDragOverSquare,
          onSquareClick,
          onSquareRightClick,
        }) => (
          <Chessboard
            id="humanVsHuman"
            position={position}
            onDrop={onDrop}
            onMouseOverSquare={onMouseOverSquare}
            onMouseOutSquare={onMouseOutSquare}
            boardStyle={{
              borderRadius: '5px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
            }}
            squareStyles={squareStyles}
            dropSquareStyle={dropSquareStyle}
            onDragOverSquare={onDragOverSquare}
            onSquareClick={onSquareClick}
            onSquareRightClick={onSquareRightClick}
          />
        )}
      </HumanVsHuman>
    </div>
  );
}
