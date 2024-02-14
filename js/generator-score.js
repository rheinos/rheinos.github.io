var canvasHeight = 1080;
var canvasWidth = 1080;

function handleTeam1() {
  document.getElementsByClassName('team-1')[0].innerHTML = document.getElementById('team1').value;
}

function handleTeam2() {
  document.getElementsByClassName('team-2')[0].innerHTML = document.getElementById('team2').value;
}

function handleScore1() {
  document.getElementsByClassName('score-1')[0].innerHTML = document.getElementById('score1').value;
}

function handleScore2() {
  document.getElementsByClassName('score-2')[0].innerHTML = document.getElementById('score2').value;
}

function handleWinner() {
  if (document.querySelectorAll('input[name="winner"]:checked')[0].value == 'winner1') {
    document.getElementsByClassName('team-1')[0].classList.add('winner');
    document.getElementsByClassName('team-2')[0].classList.remove('winner');
  }
  else {
    document.getElementsByClassName('team-2')[0].classList.add('winner');
    document.getElementsByClassName('team-1')[0].classList.remove('winner');
  }
}


document.getElementById('team1').addEventListener('change', handleTeam1);
document.getElementById('team2').addEventListener('change', handleTeam2);

document.getElementById('score1').addEventListener('change', handleScore1);
document.getElementById('score2').addEventListener('change', handleScore2);

document.querySelectorAll('input[name="winner"]').forEach((item, i) => {
  item.addEventListener('change', handleWinner);
});
