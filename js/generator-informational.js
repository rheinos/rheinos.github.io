var canvasHeight = 1080;
var canvasWidth = 1080;

function handleTitle() {
  let value = document.getElementById('title').value;
  let title = document.getElementsByClassName('title')[0];
  title.innerHTML = value;
  title.setAttribute('enabled', (value != '').toString());
}

function handleDetails() {
  document.getElementsByClassName('details')[0].innerHTML = document.getElementById('details').value;
}


document.getElementById('title').addEventListener('change', handleTitle);
document.getElementById('details').addEventListener('change', handleDetails);
