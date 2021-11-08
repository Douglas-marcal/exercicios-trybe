// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// https://www.chess.com/terms/chess-pieces

let piece = 'knight'

switch (piece.toLowerCase()) {
  case 'pawn':
    console.log("If it is a pawn's first move, it can move forward one or two squares. If a pawn has already moved, then it can move forward just one square at a time. It attacks (or captures) each square diagonally to the left or right.");
    break;
  case 'bishop':
    console.log('A bishop can move diagonally as many squares as it likes;');
    break;
  case 'knight':
    console.log('The knight moves in an "L-shape."');
    break;
  case 'rook':
    console.log('The rook can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically.');
    break;
  case 'queen':
    console.log('The queen can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically. It can also move as many squares as it likes diagonally.');
    break;
  case 'king':
    console.log('The king can only move (or capture) one square in any direction.');
    break;
  default:
    console.log('Unknown piece.');
    break;
}