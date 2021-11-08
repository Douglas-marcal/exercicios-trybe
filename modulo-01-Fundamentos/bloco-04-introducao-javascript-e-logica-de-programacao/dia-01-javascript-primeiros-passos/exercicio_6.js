// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// https://www.chess.com/terms/chess-pieces

const piece = 'null'

switch (piece.toLowerCase) {
  case 'pawn':
    console.log("If it is a pawn's first move, it can move forward one or two squares. If a pawn has already moved, then it can move forward just one square at a time. It attacks (or captures) each square diagonally to the left or right.");
    break;
  case 'bishop':
    console.log('A bishop can move diagonally as many squares as it likes;');
    break;
  case 'knight':
    console.log('The knight moves in an "L-shape."');
    break;
}