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


function handleName(e, id) {
  let value = e.currentTarget.value;
  names[id - 1].innerHTML = value;
  players[id - 1].setAttribute('enabled', (value != '').toString());
}

function handleChaser(e, id) {
  let value = e.currentTarget.checked;
  chaser[id - 1].setAttribute('enabled', value.toString());
}

function handleKeeper(e, id) {
  let value = e.currentTarget.checked;
  keeper[id - 1].setAttribute('enabled', value.toString());
}

function handleBeater(e, id) {
  let value = e.currentTarget.checked;
  beater[id - 1].setAttribute('enabled', value.toString());
}

function handleSeeker(e, id) {
  let value = e.currentTarget.checked;
  seeker[id - 1].setAttribute('enabled', value.toString());
}


document.getElementById('title').addEventListener('change', handleTitle);
document.getElementById('subtitle').addEventListener('change', handleSubtitle);
document.getElementById('date').addEventListener('change', handleDate);
document.getElementById('location').addEventListener('change', handleLocation);

let numberOfPlayers = 21;
let players = document.getElementsByClassName('player');
let names = document.getElementsByClassName('name');
let chaser = document.getElementsByClassName('white');
let keeper = document.getElementsByClassName('green');
let beater = document.getElementsByClassName('black');
let seeker = document.getElementsByClassName('yellow');

for (let i = 1; i <= numberOfPlayers; i++) {
  document.getElementById('name' + i).addEventListener('change', function(e) {
    handleName(e, i);
  },);
}

for (let i = 1; i <= numberOfPlayers; i++) {
  document.getElementById('chaser' + i).addEventListener('change', function(e) {
    handleChaser(e, i);
  },);
}

for (let i = 1; i <= numberOfPlayers; i++) {
  document.getElementById('keeper' + i).addEventListener('change', function(e) {
    handleKeeper(e, i);
  },);
}

for (let i = 1; i <= numberOfPlayers; i++) {
  document.getElementById('beater' + i).addEventListener('change', function(e) {
    handleBeater(e, i);
  },);
}

for (let i = 1; i <= numberOfPlayers; i++) {
  document.getElementById('seeker' + i).addEventListener('change', function(e) {
    handleSeeker(e, i);
  },);
}
