function handleImage(e) {
  if(e.target.files) {
    let imageFile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let bgImage = new Image();
      bgImage.src = e.target.result;
      imgContainer = document.getElementById('bgimage');
      imgContainer.src = bgImage.src;
      if (bgImage.height <= bgImage.width) {
        imgContainer.classList.add("horizontal");
      }
      else {
        imgContainer.classList.add("portrait");
      }
    }
  }
}

function handleCredit(e) {
  document.getElementsByClassName('credit')[0].innerHTML = e.currentTarget.value;
}

function handleTournamentLogo(e) {
  if(e.target.files) {
    let imageFile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let logo = new Image();
      logo.src = e.target.result;
      imgContainer = document.getElementsByClassName('tournamentlogo')[0];
      imgContainer.src = logo.src;
    }
  }
}

function handleLogo(e) {
  document.getElementById('logo').src = 'images/rhein' + e.currentTarget.value + 's-bonn-300px.webp';
}

function handleSubmit(e) {
  e.preventDefault();

  let form = document.querySelector('.wrapper');

  html2canvas(document.querySelector("#capture")).then(canvas => {
    form.appendChild(canvas)
  });
}

function handleDownload() {
  let imgLink = document.querySelector('canvas').toDataURL("image/jpeg",1.0);
  downloadButton.href = imgLink;
}


document.getElementById('imageInputLoad').addEventListener('change', handleImage);
document.getElementById('credit').addEventListener('change', handleCredit);

document.getElementById('tournamentlogo').addEventListener('change', handleTournamentLogo);

document.querySelectorAll('input[name="logo"]').forEach((item, i) => {
  item.addEventListener('change', handleLogo);
});

document.querySelector('form').addEventListener('submit', handleSubmit);

downloadButton = document.getElementById('download');
downloadButton.addEventListener('click', handleDownload);
