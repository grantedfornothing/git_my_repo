/* 
1. 오목판 사이즈는 가로(30)x세로(30)
2. 다섯개의 돌이 놓이면 이기므로 WIN_LENGTH 5로 설정
3. 제한 시간은 5분(단위: 밀리초)
*/
const BOARD_SIZE = 30;
const BLACK_STONE = 1;
const WHITE_STONE = 0;
const WIN_LENGTH = 5;
const MAX_GAME_DURATION = 5 * 60 * 1000;


// 오목판 생성, 흑돌이 선공
let board = [];
let currentPlayer = BLACK_STONE;
let gameStartTime;
let gameOver = false;

// 오목판 초기화 (2차원 배열)

function initializeBoard() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    board.push(new Array(BOARD_SIZE).fill(null));
  }
}

// 오목판 출력 (모든 칸을 'ㅁ'으로 채우고, 흑돌은 '●', 백돌은 '○')
function printBoard() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    let row = '';
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === null) {
        row += 'ㅁ';
      } else if (board[i][j] === BLACK_STONE) {
        row += '●';
      } else {
        row += '○';
      }
    }
    console.log(row);
  }
}

// 승리 여부 확인
function checkWin(row, col) {
  const directions = [
    [1, 0], [0, 1], [1, 1], [1, -1] // 오른쪽, 아래쪽, 대각선(↘), 대각선(↙)
  ];

  for (const [dx, dy] of directions) {
    let count = 1;
    for (let i = 1; i < WIN_LENGTH; i++) {
      // 해당 방향으로 이동하면서 같은 플레이어의 돌이 연속으로 이어지는 개수를 세기
      const newRow = row + dx * i;
      const newCol = col + dy * i;
      /* 
      이동한 위치가 보드를 벗어나면 더 이상 검사하지 않고 반복문 종료
      이동한 위치의 값이 현재 플레이어의 돌과 다르면 더 이상 검사하지 않고 반복문 종료
      위 두 경우가 아닌 경우, count 변수 1 증가
      */
      if (newRow < 0 || newRow >= BOARD_SIZE || newCol < 0 || newCol >= BOARD_SIZE) break;
      if (board[newRow][newCol] !== currentPlayer) break;
      count++;
    }
    // 반대 방향으로 이동하면서 다시 같은 작업 수행
    for (let i = 1; i < WIN_LENGTH; i++) {
      const newRow = row - dx * i;
      const newCol = col - dy * i;
      if (newRow < 0 || newRow >= BOARD_SIZE || newCol < 0 || newCol >= BOARD_SIZE) break;
      if (board[newRow][newCol] !== currentPlayer) break;
      count++;
    }
    // 최종적으로 count가 WIN_LENGTH(5) 이상이면 true값 반환
    if (count >= WIN_LENGTH) return true;
  }
  return false;
}

// 게임 종료 처리
function endGame(winner) {
  gameOver = true;
  // 게임 시작부터 현재까지 시간 계산
  const elapsedTime = Date.now() - gameStartTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  console.log(`Game Over! ${winner === BLACK_STONE ? '흑돌' : '백돌'}이 승리했습니다.`);
  console.log(`게임 시간: ${minutes}분 ${seconds}초`);
}

// 사용자 입력 받기
function getUserInput() {
  if (gameOver) return;
  // Node.js의 모듈인 readline을 사용해 사용자의 입출력 스트림 생성
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  // 좌표값 입력시 콜백 함수 실행
  readline.question(`좌표값 입력 (예: 15 15): `, (input) => {
    const [row, col] = input.split(' ').map(Number);
    /* 
    입력한 좌표값이 오목판을 벗어나거나 이미 놓인 자리일 경우, 
    오류 메시지 출력 및 다시 입력하도록 getUserInput() 함수 호출
    */
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) {
      console.log('잘못 두었습니다. 다시 입력해주세요.');
      readline.close();
      getUserInput();
      return;
    }
    
    if (board[row][col] !== null) {
      console.log('이미 놓인 자리입니다. 다시 입력해주세요.');
      readline.close();
      getUserInput();
      return;
    }
    // 유효한 좌표값이면 해당 위치에 돌을 놓고, 현재 오목판 상태 출력
    board[row][col] = currentPlayer;
    printBoard();

    /*
    해당 수를 놓은 플레이어가 승리했다면 endGame(currentPlayer)호출
    그렇지 않으면 플레이어 교체하고 getUserInput()함수 호출
    */
    if (checkWin(row, col)) {
      endGame(currentPlayer);
    } else {
      currentPlayer = currentPlayer === BLACK_STONE ? WHITE_STONE : BLACK_STONE;
      readline.close();
      getUserInput();
    }
  });
}

// 게임 시작
function startGame() {
  initializeBoard();
  gameStartTime = Date.now();
  printBoard();
  getUserInput();

  // 일정 시간 후 게임 종료
  setTimeout(() => {
    if (!gameOver) {
      console.log('5분이 지나 게임이 종료되었습니다.');
      process.exit(0);
    }
  }, MAX_GAME_DURATION);
}

// 게임 실행
startGame();
