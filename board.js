// Board (model)

/* 
  tic {
    _move current piece
    if current piece.collided()
      _update stack
      _newCurrentPiece
    }

  tic returns: 
  Board State = {
    current piece 
    stack of rows {
      arrays of full or empty cells
    }
  }
*/

/*
  update stack {
    _add current piece to stack
    _check for complete rows
    _remove complete rows
  }
*/

/*
  update piece {
    _move piece  
    _check for collision
  }
*/


// Collission check
  // See if any moving tetrominos bottom bounds <= the top bounds of any settled tetrominos
      // If so, set piece to "collided"