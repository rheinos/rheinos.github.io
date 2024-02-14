var canvasHeight = 1080;
var canvasWidth = 1080;

function handleTitle() {
  document.getElementsByClassName('title')[0].innerHTML = document.getElementById('title').value;
}

function handleSubtitle() {
  let value = document.getElementById('subtitle').value
  let subtitle = document.getElementsByClassName('subtitle')[0];
  subtitle.innerHTML = value;
  subtitle.setAttribute('enabled', (value != '').toString());
}

function handleDate() {
  document.getElementsByClassName('date')[0].innerHTML = document.getElementById('date').value;
}


document.getElementById('title').addEventListener('change', handleTitle);
document.getElementById('subtitle').addEventListener('change', handleSubtitle);
document.getElementById('date').addEventListener('change', handleDate);
