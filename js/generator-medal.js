var canvasHeight = 1080;
var canvasWidth = 1080;

function handlePlacement(e) {
  let value = e.currentTarget.value;
  let number_masked = document.getElementById('number_masked');
  number_masked.setAttribute('fill', 'url(#gradient' + value + ')');
  if (document.querySelectorAll('input[name="style"]:checked')[0]) {
    number_masked.setAttribute('mask', 'url(#' + value + document.querySelectorAll('input[name="style"]:checked')[0].value + ')');
  }
  else {
    number_masked.setAttribute('mask', 'url(#' + value + 'f)');
  }
  document.getElementById('number_empty').innerHTML = value;
}

function handleStyle(e) {
  let value = e.currentTarget.value;
  if (document.getElementById('placement').value) {
    document.getElementById('number_masked').setAttribute('mask', 'url(#' + document.getElementById('placement').value + value + ')');
  }
  else {
    document.getElementById('number_masked').setAttribute('mask', 'url(#1' + value + ')');
  }
  document.getElementById('bgimage').className = value;
}


document.getElementById('placement').addEventListener('change', handlePlacement);
document.querySelectorAll('input[name="style"]').forEach((item, i) => {
  item.addEventListener('change', handleStyle);
});
