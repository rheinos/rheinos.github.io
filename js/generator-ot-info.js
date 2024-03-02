var canvasHeight = 1080;
var canvasWidth = 1080;

function handleTitle() {
  document.getElementsByClassName('title')[0].innerHTML = document.getElementById('title').value;
}

function handleLocation(e) {
  let value = e.currentTarget.value;
  let subtitle = document.getElementsByClassName('subtitle')[0];
  subtitle.innerHTML = value;
}

function handleSecondaryTitle() {
  let value = document.getElementById('secondary-title').value;
  let secondaryTitle = document.getElementsByClassName('secondary-title')[0];
  secondaryTitle.innerHTML = value;
  secondaryTitle.setAttribute('enabled', (value != '').toString());
}

function handleParagraph(e, id) {
  let value = e.currentTarget.value;
  paragraphs[id - 1].innerHTML = value;
  paragraphs[id - 1].setAttribute('enabled', (value != '').toString());
}


document.getElementById('title').addEventListener('change', handleTitle);
document.getElementById('location').addEventListener('change', handleLocation);
document.getElementById('secondary-title').addEventListener('change', handleSecondaryTitle);

let paragraphs = document.getElementsByClassName('paragraph');
for (let i = 1; i <= 4; i++) {
  document.getElementById('paragraph' + i).addEventListener('change', function(e) {
    handleParagraph(e, i);
  },);
}
