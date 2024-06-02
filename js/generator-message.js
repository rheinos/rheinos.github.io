var canvasHeight = 1080;
var canvasWidth = 1080;

function handleContent(e) {
  document.getElementsByClassName('content')[0].innerHTML = e.currentTarget.value;
}


document.getElementById('content').addEventListener('change', handleContent);
