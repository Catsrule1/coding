const Player_"X";
const Player_"O";
const board = document.getElementById("board");
let playerName = Player_X;
 function makeColumnHtml(id, marker) {
 return `<td id="${id}" onclick="cellClick(this)">[${marker}]</td>`;
}
function cellClick(cell) {
 cell.innerHTML =  makeColumnHtml(cell.id, player);
 switchPlayer();
}
 function displayPlayerName(){
  document.getElementById("currentPlayer").innerText = "Current Player: " + plakyerName;
}
 function switchPlayer(){
  playerName = (playerName == PLAYER_X) ? PLAYER_O : PLAYER_X; 
  displayPlayerName();
}
 function init(){
  playerName = PLAYER_X;
  displayPlayerName();
  let boardHtml = "";

for (let ix = 0; ix < 3; ix++) {
 boardHtml += makeColumnHtml(`${ix}_${js}`, "_");
}
 boardHtml += "</tr>";
}
board.innerHTML = boardHtml;
}
init();
}
