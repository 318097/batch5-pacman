import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer } from 'react-konva';
import { codeToEntity } from './gameCore';

import Wall from './entities/Wall';
import Ghost from './entities/Ghost';
import Food from './entities/Food';
import Pacman from './entities/Pacman';
import Free from './entities/Free';
import Energizer from './entities/Energizer';

function PacmanBoard({ gridState, gridSize }) {
  if (gridState === '') {
    return null;
  }
  const game = [];
  for (let row = 0; row < gridState.length; row += 1) {
    const column = gridState[row];
    for (let col = 0; col < column.length; col += 1) {
      const entity = codeToEntity(gridState[row][col]);
      switch (entity) {
        case 'wall':
          game.push(<Wall key={`${row * 100}${col * 100}`} x={col} y={row} gridSize={gridSize} />);
          break;
        case 'food':
          game.push(<Food key={`${row * 100}${col * 100}`} x={col} y={row} gridSize={gridSize} />);
          break;
        case 'ghost':
          game.push(<Ghost key={`${row * 100}${col * 100}`} x={col} y={row} gridSize={gridSize} />);
          break;
        case 'pacman':
          game.push(<Pacman key={`${row * 100}${col * 100}`} x={col} y={row} gridSize={gridSize} />);
          break;
        case 'energizer':
          game.push(<Energizer key={`${row * 100}${col * 100}`} x={col} y={row} gridSize={gridSize} />);
          break;
        default:
          game.push(<Free key={`${row * 100}${col * 100}`} x={col} y={row} gridSize={gridSize} />);
          break;
      }
    }
  }

  return (
    <Stage width={500} height={500}>
      <Layer>
        {game}
      </Layer>
    </Stage>
  );
}

PacmanBoard.propTypes = {
  gridState: PropTypes.number.isRequired,
  gridSize: PropTypes.number.isRequired,
};

export default PacmanBoard;