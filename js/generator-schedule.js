var canvasHeight = 1080;
var canvasWidth = 1080;

function handleTitle() {
  document.getElementsByClassName('title')[0].innerHTML = document.getElementById('title').value;
}

function handleSubtitle() {
  document.getElementsByClassName('subtitle')[0].innerHTML = document.getElementById('subtitle').value;
}

function handleDate() {
  document.getElementsByClassName('date')[0].innerHTML = document.getElementById('date').value;
}

function handleLocation() {
  document.getElementsByClassName('location')[0].innerHTML = document.getElementById('location').value;
}

function handleLivestreamText() {
  document.querySelectorAll('.livestream').forEach((item, i) => {
    item.innerHTML = document.getElementById('livestream-text').value;
  });
}


function handleTeam(e) {
  let value = e.currentTarget.value;
  let matchId = Number(e.currentTarget.id[e.currentTarget.id.length - 1]) - 1;
  team_strings[matchId].innerHTML = value;
}

function handleOpponent(e) {
  let value = e.currentTarget.value;
  let matchId = Number(e.currentTarget.id[e.currentTarget.id.length - 1]) - 1;
  opponents[matchId].innerHTML = value;
  matches[matchId].setAttribute('enabled', (value != '').toString());
}

function handleTime(e) {
  let value = e.currentTarget.value;
  let matchId = Number(e.currentTarget.id[e.currentTarget.id.length - 1]) - 1;
  time_strings[matchId].innerHTML = value;
}

function handleLivestream(e) {
  let value = e.currentTarget.checked;
  let matchId = Number(e.currentTarget.id[e.currentTarget.id.length - 1]) - 1;
  livestream_bools[matchId].setAttribute('enabled', value.toString());
}


document.getElementById('title').addEventListener('change', handleTitle);
document.getElementById('subtitle').addEventListener('change', handleSubtitle);
document.getElementById('date').addEventListener('change', handleDate);
document.getElementById('location').addEventListener('change', handleLocation);
document.getElementById('livestream-text').addEventListener('change', handleLivestreamText);

let numberOfMatches = 5;
let matches = document.getElementsByClassName('match');
let team_strings = document.getElementsByClassName('team');
let opponents = document.getElementsByClassName('opponent');
let time_strings = document.getElementsByClassName('time');
let livestream_bools = document.getElementsByClassName('livestream');

for (let i = 1; i <= numberOfMatches; i++) {
  document.getElementById('team' + i).addEventListener('change', handleTeam);
}

for (let i = 1; i <= numberOfMatches; i++) {
  document.getElementById('opponent' + i).addEventListener('change', handleOpponent);
}

for (let i = 1; i <= numberOfMatches; i++) {
  document.getElementById('time' + i).addEventListener('change', handleTime);
}

for (let i = 1; i <= numberOfMatches; i++) {
  document.getElementById('livestream' + i).addEventListener('change', handleLivestream);
}
