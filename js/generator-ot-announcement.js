var canvasHeight = 1080;
var canvasWidth = 1080;

function handleTitle(e) {
  document.getElementsByClassName('title')[0].innerHTML = e.currentTarget.value;
}

function handleSubtitle(e) {
  document.getElementsByClassName('subtitle')[0].innerHTML = e.currentTarget.value;
}

function handleContent(e) {
  document.getElementsByClassName('text-body')[0].innerHTML = e.currentTarget.value;
}


document.getElementById('title').addEventListener('change', handleTitle);
document.getElementById('subtitle').addEventListener('change', handleSubtitle);
document.getElementById('content').addEventListener('change', handleContent);
