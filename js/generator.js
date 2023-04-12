function writeWithBackground(wWBtext,wWBx,wWBy,wWBfontSize,wWBstroke = false,wWBwideBG = false) {
  let context = document.querySelector('canvas').getContext("2d");

  let wWBuppercaseText = wWBtext.toUpperCase();
  context.font = wWBfontSize + "px RheinosBonnCollegiate";
  context.textAlign = "center";
  let wWBtextLength = (context.measureText(wWBuppercaseText).width + (wWBfontSize / 2));
  if (wWBwideBG) {
    wWBtextLength = (context.measureText(wWBuppercaseText).width + (2.5 * wWBfontSize));
  }
  context.fillStyle = "rgba(23, 31, 53, 0.8)";
  context.fillRect((wWBx - (wWBtextLength / 2)),(wWBy - (7 * wWBfontSize / 12)),wWBtextLength,(7 * wWBfontSize / 6));
  if (wWBstroke) {
    context.strokeStyle = "rgba(253, 253, 253, 1)";
    context.lineWidth = (wWBfontSize * 0.025);
    context.strokeText(wWBuppercaseText, wWBx, (wWBy + (wWBfontSize / 3)));
  } else {
    context.fillStyle = "rgba(253, 253, 253, 1)";
    context.fillText(wWBuppercaseText, wWBx, (wWBy + (wWBfontSize / 3)));
  }
}

function designSelector() {
  let val = document.getElementById("designSelector").value;
  if (val == "standard_instagram") {
    document.querySelector('form').innerHTML = `
      <label for="textInput1">Hauptüberschrift:</label>
      <input type="text" id="textInput1" value="Überschrift">

      <label for="bonn">Rheinos Bonn</label>
      <input type="radio" id="bonn" name="team" value="bonn" checked>
      <label for="bonn2">RheinIIs</label>
      <input type="radio" id="bonn2" name="team" value="bonn2">

      <img src="images/bonn.png" />
      <img src="images/bonn2.png" />
      <img src="images/rheinos_kontur.png" />

      <input type="file" id="imageInput" accept = "image/*">

      <canvas width="1080px" height="1080px">
        Dein Browser unterstützt das HTML-Canva-Tag nicht. Probiere bitte einen anderen Browser.
      </canvas>
    `;
    let imgInput = document.getElementById('imageInput');
    imgInput.addEventListener('change', standard_instagram);
  } else if (val == "standard_facebook") {
    document.querySelector('form').innerHTML = `
      <label for="textInput1">Hauptüberschrift:</label>
      <input type="text" id="textInput1" value="Überschrift">

      <label for="bonn">Rheinos Bonn</label>
      <input type="radio" id="bonn" name="team" value="bonn" checked>
      <label for="bonn2">RheinIIs</label>
      <input type="radio" id="bonn2" name="team" value="bonn2">

      <img src="images/bonn.png" />
      <img src="images/bonn2.png" />
      <img src="images/rheinos_kontur.png" />

      <input type="file" id="imageInput" accept = "image/*">

      <canvas width="1920px" height="1080px">
        Dein Browser unterstützt das HTML-Canva-Tag nicht. Probiere bitte einen anderen Browser.
      </canvas>
    `;
    let imgInput = document.getElementById('imageInput');
    imgInput.addEventListener('change', standard_facebook);
  } else if (val == "league_instagram") {
    document.querySelector('form').innerHTML = `
      <label for="textInput1">Hauptüberschrift:</label>
      <input type="text" id="textInput1" value="n. Spieltag">
      <label for="textInput2">Unterüberschrift oben:</label>
      <input type="text" id="textInput2" value="NRW-Liga">
      <label for="textInput3">Unterüberschrift unten:</label>
      <input type="text" id="textInput3" value="in Bonn">
      <label for="textInput4">Datum (TAG. MONAT):</label>
      <input type="text" id="textInput4" value="1. Januar">

      <label for="bielefeld">Bielefelder Basilisken</label>
      <input type="checkbox" id="bielefeld" name="team" value="bielefeld">
      <label for="cologne">Cologne Cannons</label>
      <input type="checkbox" id="cologne" name="team" value="cologne">
      <label for="duesseldorf">Düsseldorf Dementors</label>
      <input type="checkbox" id="duesseldorf" name="team" value="duesseldorf">
      <label for="muenster">Münster Marauders</label>
      <input type="checkbox" id="muenster" name="team" value="muenster">
      <label for="bonn">Rheinos Bonn</label>
      <input type="checkbox" id="bonn" name="team" value="bonn" checked>
      <label for="bonn2">RheinIIs</label>
      <input type="checkbox" id="bonn2" name="team" value="bonn2">
      <label for="bochum">Ruhr Phoenix</label>
      <input type="checkbox" id="bochum" name="team" value="bochum">

      <img src="images/bielefeld.png" />
      <img src="images/cologne.png" />
      <img src="images/duesseldorf.png" />
      <img src="images/muenster.png" />
      <img src="images/bonn.png" />
      <img src="images/bonn2.png" />
      <img src="images/bochum.png" />
      <img src="images/rheinos_kontur.png" />

      <input type="file" id="imageInput" accept = "image/*">

      <canvas width="1080px" height="1080px">
        Dein Browser unterstützt das HTML-Canva-Tag nicht. Probiere bitte einen anderen Browser.
      </canvas>
    `;
    let imgInput = document.getElementById('imageInput');
    imgInput.addEventListener('change', league_instagram);
  } else if (val == "league_facebook") {
    document.querySelector('form').innerHTML = `
      <label for="textInput1">Hauptüberschrift:</label>
      <input type="text" id="textInput1" value="n. Spieltag">
      <label for="textInput2">Unterüberschrift oben:</label>
      <input type="text" id="textInput2" value="NRW-Liga">
      <label for="textInput3">Unterüberschrift unten:</label>
      <input type="text" id="textInput3" value="in Bonn">
      <label for="textInput4">Datum (TAG. MONAT):</label>
      <input type="text" id="textInput4" value="1. Januar">

      <label for="bielefeld">Bielefelder Basilisken</label>
      <input type="checkbox" id="bielefeld" name="team" value="bielefeld">
      <label for="cologne">Cologne Cannons</label>
      <input type="checkbox" id="cologne" name="team" value="cologne">
      <label for="duesseldorf">Düsseldorf Dementors</label>
      <input type="checkbox" id="duesseldorf" name="team" value="duesseldorf">
      <label for="muenster">Münster Marauders</label>
      <input type="checkbox" id="muenster" name="team" value="muenster">
      <label for="bonn">Rheinos Bonn</label>
      <input type="checkbox" id="bonn" name="team" value="bonn" checked>
      <label for="bonn2">RheinIIs</label>
      <input type="checkbox" id="bonn2" name="team" value="bonn2">
      <label for="bochum">Ruhr Phoenix</label>
      <input type="checkbox" id="bochum" name="team" value="bochum">

      <img src="images/bielefeld.png" />
      <img src="images/cologne.png" />
      <img src="images/duesseldorf.png" />
      <img src="images/muenster.png" />
      <img src="images/bonn.png" />
      <img src="images/bonn2.png" />
      <img src="images/bochum.png" />
      <img src="images/rheinos_kontur.png" />

      <input type="file" id="imageInput" accept = "image/*">

      <canvas width="1920px" height="1080px">
        Dein Browser unterstützt das HTML-Canva-Tag nicht. Probiere bitte einen anderen Browser.
      </canvas>
    `;
    let imgInput = document.getElementById('imageInput');
    imgInput.addEventListener('change', league_facebook);
  }
}

function drawLogo(img,number,startLeft,startTop,imgWidth) {
  let context = document.querySelector('canvas').getContext("2d");

  let x = (startLeft + (number * imgWidth) + (number * (imgWidth / 6)));
/*
  document.querySelector('form').innerHTML += "<br>Quelle: " + img.src + "<br>Breite: " + img.width + "<br>i = " + number;

  context.fillStyle = "rgba(255, 0, 0, 0.5)";
  context.fillRect(x, startTop, imgWidth, imgWidth);
*/
  context.drawImage(img,0,0,img.width,img.height,x,startTop,imgWidth,imgWidth);
}

function league_instagram(e) {
  if(e.target.files) {
    let imageFile = e.target.files[0];
    let canvasHeight = 1080;
    let canvasWidth = 1080;
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function(ev) {
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext("2d");

        let newHeight = new Number();
        let newWidth = new Number();
        let pull = new Number();
        if ((canvasHeight / image.height) > (canvasWidth / image.width)) {
          newHeight = canvasHeight;
          newWidth = ((newHeight / image.height) * image.width);
          pull = ((canvasWidth - newWidth) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,pull,0,newWidth,newHeight);
        }
        else {
          newWidth = canvasWidth;
          newHeight = ((newWidth / image.width) * image.height);
          pull = ((canvasHeight - newHeight) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,0,pull,newWidth,newHeight);
        }


        ctx.fillStyle = "rgba(23, 31, 53, 0.5)";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.save();
        ctx.globalAlpha = 0.5;
        let rheino = document.querySelectorAll('img[src="images/rheinos_kontur.png"]');
        let drawing = new Image();
        drawing = rheino[0];
        ctx.drawImage(drawing,0,0,drawing.width,drawing.height,(-100),(-100),1280,1280);
        ctx.restore();


        let y = 360;
        let fontSize = 150;
        let fontSizeRoot = fontSize;
        let text = document.getElementById('textInput1').value;
        if (text != "") {
          writeWithBackground(text,(canvasWidth / 2),y,fontSize);
        }


        fontSize = 115;
        y = (360 - (7 * fontSizeRoot / 12) - (7 * fontSize / 12) - (1.5 * fontSize / 6));
        text = document.getElementById('textInput2').value;
        if (text != "") {
          writeWithBackground(text,(canvasWidth / 2),y,fontSize,true);
        }


        fontSize = 115;
        y = (360 + (7 * fontSizeRoot / 12) + (7 * fontSize / 12) + (1.5 * fontSize / 6));
        text = document.getElementById('textInput3').value;
        if (text != "") {
          writeWithBackground(text,(canvasWidth / 2),y,fontSize,true);
        }


        ctx.save();
        ctx.translate((canvasHeight / 2),(canvasWidth / 2));
        ctx.rotate(45 * Math.PI / 180);
        fontSize = 48;
        ctx.font = fontSize + "px RheinosBonnCollegiate";
        text = document.getElementById('textInput4').value;
        if (text != "") {
          y = ((ctx.measureText(text.toUpperCase()).width / 2) - (Math.sqrt(2 * (canvasHeight / 2) * (canvasHeight / 2))) + (fontSize / 2));
          writeWithBackground(text,0,y,fontSize,true,true);
        }
        ctx.restore();


        let checkboxes = document.querySelectorAll('input[name="team"]:checked');
        let numberOfTeams = checkboxes.length;
        newWidth = (canvasWidth / 6);
        let logos = document.querySelectorAll('img[src="images/' + checkboxes[0].value + '.png"]');
        let logo = new Image();
        let startX = new Number();
        if (numberOfTeams <= 5) {
          startX = (((canvasWidth - (newWidth * numberOfTeams)) / 2) - (newWidth / 3) + ((5 - numberOfTeams) * (newWidth / 6) * 0.5));
          y = (845 - (newWidth / 2));
        }
        else {
          startX = (((canvasWidth - (newWidth * 5)) / 2) - (newWidth / 3));
          y = (845 - (13 * newWidth / 12));
        }

        for (let i = 0; i < numberOfTeams; i++) {
          logos = document.querySelectorAll('img[src="images/' + checkboxes[i].value + '.png"]');
          logo = logos[0];
          if (i >= 5) {
            startX = (((canvasWidth - (newWidth * (numberOfTeams - 5))) / 2) - (newWidth / 3) + ((10 - numberOfTeams) * (newWidth / 6) * 0.5));
            y = (845 + (newWidth / 12));
          }
          drawLogo(logo,(i % 5),startX,y,newWidth);
        }

        let imgData = canvas.toDataURL("image/jpeg",0.75);
      }
    }
  }
}

function league_facebook(e) {
  if(e.target.files) {
    let imageFile = e.target.files[0];
    let canvasHeight = 1080;
    let canvasWidth = 1920;
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function(ev) {
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext("2d");

        let newHeight = new Number();
        let newWidth = new Number();
        let pull = new Number();
        if ((canvasHeight / image.height) > (canvasWidth / image.width)) {
          newHeight = canvasHeight;
          newWidth = ((newHeight / image.height) * image.width);
          pull = ((canvasWidth - newWidth) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,pull,0,newWidth,newHeight);
        }
        else {
          newWidth = canvasWidth;
          newHeight = ((newWidth / image.width) * image.height);
          pull = ((canvasHeight - newHeight) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,0,pull,newWidth,newHeight);
        }


        ctx.fillStyle = "rgba(23, 31, 53, 0.5)";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.save();
        ctx.globalAlpha = 0.5;
        let rheino = document.querySelectorAll('img[src="images/rheinos_kontur.png"]');
        let drawing = new Image();
        drawing = rheino[0];
        ctx.drawImage(drawing,0,0,drawing.width,drawing.height,0,(-400),canvasWidth,canvasWidth);
        ctx.restore();


        let fontSize = 175;
        let fontSizeRoot = fontSize;
        fontSize = 131;
        let y = ((7 * fontSizeRoot / 12) + (7 * fontSize / 6) + (1.5 * fontSize / 3));
        let text = document.getElementById('textInput1').value;
        if (text != "") {
          writeWithBackground(text,(canvasWidth / 2),y,fontSizeRoot);
        }


        fontSize = 131;
        y = ((7 * fontSize / 12) + (1.5 * fontSize / 6));
        text = document.getElementById('textInput2').value;
        if (text != "") {
          writeWithBackground(text,(canvasWidth / 2),y,fontSize,true);
        }


        fontSize = 131;
        y = ((7 * fontSizeRoot / 6) + (7 * fontSize / 4) + (4.5 * fontSize / 6));
        text = document.getElementById('textInput3').value;
        if (text != "") {
          writeWithBackground(text,(canvasWidth / 2),y,fontSize,true);
        }


        ctx.save();
        ctx.translate((canvasWidth - (canvasHeight / 2)),(canvasHeight / 2));
        ctx.rotate(45 * Math.PI / 180);
        fontSize = 75;
        ctx.font = fontSize + "px RheinosBonnCollegiate";
        text = document.getElementById('textInput4').value;
        if (text != "") {
          y = ((ctx.measureText(text.toUpperCase()).width / 2) - (Math.sqrt(2 * (canvasHeight / 2) * (canvasHeight / 2))) + (fontSize / 2));
          writeWithBackground(text,0,y,fontSize,true,true);
        }
        ctx.restore();


        let checkboxes = document.querySelectorAll('input[name="team"]:checked');
        let numberOfTeams = checkboxes.length;
        newWidth = (2832 / 15);
        let logos = document.querySelectorAll('img[src="images/' + checkboxes[0].value + '.png"]');
        let logo = new Image();
        let startX = new Number();
        if (numberOfTeams <= 7) {
          startX = (((canvasWidth - (newWidth * numberOfTeams)) / 2) - (newWidth / 2) + ((7 - numberOfTeams) * (newWidth / 6) * 0.5));
          y = (844 - (newWidth / 2));
        }
        else {
          startX = (((canvasWidth - (newWidth * 7)) / 2) - (newWidth / 2));
          y = (844 - (13 * newWidth / 12));
        }

        for (let i = 0; i < numberOfTeams; i++) {
          logos = document.querySelectorAll('img[src="images/' + checkboxes[i].value + '.png"]');
          logo = logos[0];
          if (i >= 7) {
            startX = (((canvasWidth - (newWidth * (numberOfTeams - 7))) / 2) - (newWidth / 2) + ((14 - numberOfTeams) * (newWidth / 6) * 0.5));
            y = (844 + (newWidth / 12));
          }
          drawLogo(logo,(i % 7),startX,y,newWidth);
        }

        let imgData = canvas.toDataURL("image/jpeg",0.75);
      }
    }
  }
}

function standard_instagram(e) {
  if(e.target.files) {
    let imageFile = e.target.files[0];
    let canvasHeight = 1080;
    let canvasWidth = 1080;
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function(ev) {
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext("2d");


        let newHeight = new Number();
        let newWidth = new Number();
        let pull = new Number();
        if ((canvasHeight / image.height) > (canvasWidth / image.width)) {
          newHeight = canvasHeight;
          newWidth = ((newHeight / image.height) * image.width);
          pull = ((canvasWidth - newWidth) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,pull,0,newWidth,newHeight);
        }
        else {
          newWidth = canvasWidth;
          newHeight = ((newWidth / image.width) * image.height);
          pull = ((canvasHeight - newHeight) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,0,pull,newWidth,newHeight);
        }


        let fontSize = 150;
        ctx.font = fontSize + "px RheinosBonnCollegiate";
        let text = document.getElementById('textInput1').value.toUpperCase();
        while ((ctx.measureText(text).width) > (canvasWidth - (fontSize / 3))) {
          fontSize--;
          ctx.font = fontSize + "px RheinosBonnCollegiate";
        }

        ctx.textAlign = "right";
        ctx.fillStyle = "rgba(253, 253, 253, 1)";
        ctx.beginPath();
        ctx.moveTo(canvasWidth,0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 6)),0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 6)),(7 * fontSize / 6));
        ctx.lineTo((canvasWidth - ctx.measureText(text).width),(4 * fontSize / 3));
        ctx.lineTo(canvasWidth,(4 * fontSize / 3));
        ctx.fill();
        ctx.fillStyle = "rgba(23, 31, 53, 1)";
        ctx.beginPath();
        ctx.moveTo(canvasWidth,0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 3)),0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 3)),(5 * fontSize / 6));
        ctx.lineTo((canvasWidth - ctx.measureText(text).width),(7 * fontSize / 6));
        ctx.lineTo(canvasWidth,(7 * fontSize / 6));
        ctx.fill();
        ctx.fillStyle = "rgba(253, 253, 253, 1)";
        ctx.fillText(text, (canvasWidth - (fontSize / 6)), (11 * fontSize / 12));


        let radio = document.querySelectorAll('input[name="team"]:checked');
        let logo = document.querySelectorAll('img[src="images/' + radio[0].value + '.png"]');
        newHeight = 150;
        ctx.drawImage(logo[0],81,0,918,logo[0].height,(newHeight / 10),(canvasHeight - (11 * newHeight / 10)),((918 / logo[0].height) * newHeight),newHeight);

        let imgData = canvas.toDataURL("image/jpeg",0.75);
      }
    }
  }
}

function standard_facebook(e) {
  if(e.target.files) {
    let imageFile = e.target.files[0];
    let canvasHeight = 1080;
    let canvasWidth = 1920;
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function(ev) {
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext("2d");


        let newHeight = new Number();
        let newWidth = new Number();
        let pull = new Number();
        if ((canvasHeight / image.height) > (canvasWidth / image.width)) {
          newHeight = canvasHeight;
          newWidth = ((newHeight / image.height) * image.width);
          pull = ((canvasWidth - newWidth) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,pull,0,newWidth,newHeight);
        }
        else {
          newWidth = canvasWidth;
          newHeight = ((newWidth / image.width) * image.height);
          pull = ((canvasHeight - newHeight) / 2);
          ctx.drawImage(image,0,0,image.width,image.height,0,pull,newWidth,newHeight);
        }


        let fontSize = 150;
        ctx.font = fontSize + "px RheinosBonnCollegiate";
        let text = document.getElementById('textInput1').value.toUpperCase();
        while ((ctx.measureText(text).width) > (canvasWidth - (fontSize / 3))) {
          fontSize--;
          ctx.font = fontSize + "px RheinosBonnCollegiate";
        }

        ctx.textAlign = "right";
        ctx.fillStyle = "rgba(253, 253, 253, 1)";
        ctx.beginPath();
        ctx.moveTo(canvasWidth,0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 6)),0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 6)),(7 * fontSize / 6));
        ctx.lineTo((canvasWidth - ctx.measureText(text).width),(4 * fontSize / 3));
        ctx.lineTo(canvasWidth,(4 * fontSize / 3));
        ctx.fill();
        ctx.fillStyle = "rgba(23, 31, 53, 1)";
        ctx.beginPath();
        ctx.moveTo(canvasWidth,0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 3)),0);
        ctx.lineTo((canvasWidth - ctx.measureText(text).width - (fontSize / 3)),(5 * fontSize / 6));
        ctx.lineTo((canvasWidth - ctx.measureText(text).width),(7 * fontSize / 6));
        ctx.lineTo(canvasWidth,(7 * fontSize / 6));
        ctx.fill();
        ctx.fillStyle = "rgba(253, 253, 253, 1)";
        ctx.fillText(text, (canvasWidth - (fontSize / 6)), (11 * fontSize / 12));


        let radio = document.querySelectorAll('input[name="team"]:checked');
        let logo = document.querySelectorAll('img[src="images/' + radio[0].value + '.png"]');
        newHeight = 150;
        ctx.drawImage(logo[0],81,0,918,logo[0].height,(newHeight / 10),(canvasHeight - (11 * newHeight / 10)),((918 / logo[0].height) * newHeight),newHeight);

        let imgData = canvas.toDataURL("image/jpeg",0.75);
      }
    }
  }
}

let imgInput = document.getElementById('imageInputLoad');
imgInput.addEventListener('change', standard_instagram);
