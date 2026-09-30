const backgroundImage = document.getElementById('bgimage');
const backgroundInput = document.getElementById('imageInputLoad');
const backgroundOptions = document.querySelectorAll('input[name="background-image"]');
const backgroundStatus = document.getElementById('background-image-status');
const creditInput = document.getElementById('credit');
const creditPreview = document.querySelector('#capture .credit');
const downloadButton = document.getElementById('download');

let backgroundRequest = 0;
let backgroundLoad = Promise.resolve(true);
let selectedPreset = document.querySelector('input[name="background-image"]:checked');
let renderedCanvas = null;

function invalidateRenderedCanvas() {
  if (renderedCanvas) {
    renderedCanvas.remove();
    renderedCanvas = null;
  }
  downloadButton.removeAttribute('href');
}

function setCredit(value) {
  creditInput.value = value;
  creditPreview.textContent = value;
  invalidateRenderedCanvas();
}

async function loadBackground(src, credit, request) {
  const image = new Image();
  try {
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
      image.src = src;
    });
    if (request !== backgroundRequest) return false;

    backgroundImage.src = src;
    backgroundImage.classList.remove('horizontal', 'portrait');
    backgroundImage.classList.add(image.naturalWidth >= image.naturalHeight ? 'horizontal' : 'portrait');
    if (backgroundImage.decode) await backgroundImage.decode();
    if (request !== backgroundRequest) return false;

    setCredit(credit);
    backgroundStatus.textContent = '';
    return true;
  } catch (error) {
    if (request === backgroundRequest) backgroundStatus.textContent = 'The image could not be loaded.';
    return false;
  }
}

function handlePreset(event) {
  const option = event.currentTarget;
  const request = ++backgroundRequest;
  backgroundInput.value = '';
  backgroundLoad = loadBackground(option.dataset.image, option.dataset.credit, request);
  backgroundLoad.then(success => {
    if (request !== backgroundRequest) return;
    if (success) {
      selectedPreset = option;
    } else if (selectedPreset) {
      selectedPreset.checked = true;
    } else {
      option.checked = false;
    }
  });
}

function handleImage(event) {
  const file = event.currentTarget.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    backgroundStatus.textContent = 'Please choose an image file.';
    backgroundInput.value = '';
    return;
  }

  const request = ++backgroundRequest;
  backgroundLoad = new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = async () => {
      const success = await loadBackground(reader.result, '', request);
      if (success && request === backgroundRequest) {
        backgroundOptions.forEach(option => { option.checked = false; });
        selectedPreset = null;
      } else if (request === backgroundRequest) {
        backgroundInput.value = '';
      }
      resolve(success);
    };
    reader.onerror = () => {
      if (request === backgroundRequest) {
        backgroundStatus.textContent = 'The image could not be read.';
        backgroundInput.value = '';
      }
      resolve(false);
    };
    reader.readAsDataURL(file);
  });
}

function handleCredit(event) {
  creditPreview.textContent = event.currentTarget.value;
  invalidateRenderedCanvas();
}

function handleTournamentLogo(e) {
  if(e.target.files) {
    let imageFile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let logo = new Image();
      logo.src = e.target.result;
      const imgContainer = document.getElementsByClassName('tournamentlogo')[0];
      imgContainer.onload = invalidateRenderedCanvas;
      imgContainer.src = logo.src;
      invalidateRenderedCanvas();
    }
  }
}

function handleLogo(e) {
  const logo = document.getElementById('logo');
  if (e.currentTarget.value === 'none') {
    logo.style.display = 'none';
  } else {
    logo.src = 'images/rhein' + e.currentTarget.value + 's-bonn-300px.webp';
    logo.style.display = '';
  }
  invalidateRenderedCanvas();
}

async function handleSubmit(e) {
  e.preventDefault();
  if (!(await backgroundLoad)) return;

  const form = document.querySelector('.wrapper');
  const canvas = await html2canvas(document.querySelector('#capture'));
  invalidateRenderedCanvas();
  renderedCanvas = canvas;
  form.appendChild(canvas);
  downloadButton.href = canvas.toDataURL('image/jpeg', 1.0);
}

backgroundOptions.forEach(option => option.addEventListener('change', handlePreset));
backgroundInput.addEventListener('change', handleImage);
creditInput.addEventListener('input', handleCredit);

if (selectedPreset) {
  const request = ++backgroundRequest;
  backgroundLoad = loadBackground(selectedPreset.dataset.image, selectedPreset.dataset.credit, request);
}

if (document.getElementById('tournamentlogo')) {
  document.getElementById('tournamentlogo').addEventListener('change', handleTournamentLogo);
}

document.querySelectorAll('input[name="logo"]').forEach(item => {
  item.addEventListener('change', handleLogo);
});

document.querySelector('form').addEventListener('submit', handleSubmit);
downloadButton.addEventListener('click', event => {
  if (!renderedCanvas) event.preventDefault();
});
