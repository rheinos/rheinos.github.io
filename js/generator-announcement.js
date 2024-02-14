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

function handleSecondaryTitle() {
  let value = document.getElementById('secondary-title').value
  let secondaryTitle = document.getElementsByClassName('secondary-title')[0];
  secondaryTitle.innerHTML = value;
  secondaryTitle.setAttribute('enabled', (value != '').toString());
}

function handleDetails() {
  let value = document.getElementById('details').value
  let details = document.getElementsByClassName('details')[0];
  details.innerHTML = value;
  details.setAttribute('enabled', (value != '').toString());
}


document.getElementById('title').addEventListener('change', handleTitle);
document.getElementById('subtitle').addEventListener('change', handleSubtitle);
document.getElementById('secondary-title').addEventListener('change', handleSecondaryTitle);
document.getElementById('details').addEventListener('change', handleDetails);
