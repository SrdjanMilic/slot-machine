const totalAmount = document.getElementById('js-total');
const betAmount = document.getElementById('js-bet-amount');
const result = document.getElementById('js-result');
const blockWrapper = document.getElementById('js-block-wrapper');

let total = 100; // Start amount value

totalAmount.value = total;
totalAmount.innerHTML = total;

export let spin = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      try {
        let symbols = JSON.parse(this.responseText); // path string to images
        let imagesArray = [
          symbols.seven,
          symbols.grapes,
          symbols.orange
        ];

        newImage1.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage2.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage3.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage4.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage5.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage6.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage7.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage8.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage9.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage10.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage11.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage12.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage13.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage14.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        newImage15.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];

      } catch (err) {
        console.log(err.message + ' in ' + xhttp.responseText);
      }
    }
  };

  xhttp.open('GET', './data.json', true);
  xhttp.send();

  const canvasWrapper = document.getElementById('js-canvas-wrapper');

  for (let i = 1; i < 16; i++) {
    let canvas = document.getElementById('js-canvas' + i);
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas.className = 'canvas-symbol canvas-symbol-border';
  }

  canvasWrapper.classList.remove('canvas-wrapper');

  blockWrapper.className = 'block-wrapper';

  let canvasBlock1 = document.getElementById('js-canvas-block-1');
  let canvasBlock2 = document.getElementById('js-canvas-block-2');
  let canvasBlock3 = document.getElementById('js-canvas-block-3');

  canvasBlock1.className = 'canvas-block canvas-block-1 block-background';
  canvasBlock2.className = 'canvas-block block-background';
  canvasBlock3.className = 'canvas-block canvas-block-3 block-background';

};

export let stop = () => {
  let bet = betAmount.value;

  const coins = new Audio('sounds/coins.mp3');
  const fail = new Audio('sounds/Error.mp3');

  let win;
  if (bet >= total) {
    document.getElementById('js-stop').disabled = true;
    result.innerHTML = 'Please decrease bet amount!';
    win = 0;
    total += win;
    totalAmount.innerHTML = total;
    fail.play();
    return false;
  } else if (newImage6.src === newImage7.src && newImage6.src === newImage8.src && newImage6.src === newImage9.src && newImage6.src === newImage10.src) {
    win = (10000 * bet);
    result.innerHTML = `JackPot!! You have won ${win}$!`;
    total += win;
    totalAmount.innerHTML = total;
    coins.play();
  } else if (newImage6.src === newImage7.src && newImage6.src === newImage8.src && newImage6.src === newImage9.src) {
    win = (100 * bet);
    result.innerHTML = `First prize. You have won ${win}$!`;
    total += win;
    totalAmount.innerHTML = total;
    coins.play();
  } else if (newImage6.src === newImage7.src && newImage6.src === newImage8.src) {
    win = (50 * bet);
    result.innerHTML = `Second prize. You have won ${win}$!`;
    total += win;
    totalAmount.innerHTML = total;
    coins.play();
  } else if (newImage6.src === newImage7.src) {
    win = (10 * bet);
    result.innerHTML = `Third prize. You have won ${win}$!`;
    total += win;
    totalAmount.innerHTML = total;
    coins.play();
  } else {
    result.innerHTML = 'You have won nothing!';
    total -= bet;
    totalAmount.innerHTML = total;
    fail.play();
  }
};

let newImage1 = new Image();
let newImage2 = new Image();
let newImage3 = new Image();
let newImage4 = new Image();
let newImage5 = new Image();
let newImage6 = new Image();
let newImage7 = new Image();
let newImage8 = new Image();
let newImage9 = new Image();
let newImage10 = new Image();
let newImage11 = new Image();
let newImage12 = new Image();
let newImage13 = new Image();
let newImage14 = new Image();
let newImage15 = new Image();

newImage1.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas1');
  let context = canvas.getContext('2d');
  context.drawImage(newImage1, 82, 30, 134, 88);
}, false);

newImage2.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas2');
  let context = canvas.getContext('2d');
  context.drawImage(newImage2, 82, 30, 134, 88);
}, false);

newImage3.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas3');
  let context = canvas.getContext('2d');
  context.drawImage(newImage3, 82, 30, 134, 88);
}, false);

newImage4.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas4');
  let context = canvas.getContext('2d');
  context.drawImage(newImage4, 82, 30, 134, 88);
}, false);

newImage5.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas5');
  let context = canvas.getContext('2d');
  context.drawImage(newImage5, 82, 30, 134, 88);
}, false);

newImage6.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas6');
  let context = canvas.getContext('2d');
  context.drawImage(newImage6, 82, 30, 134, 88);
}, false);

newImage7.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas7');
  let context = canvas.getContext('2d');
  context.drawImage(newImage7, 82, 30, 134, 88);
}, false);

newImage8.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas8');
  let context = canvas.getContext('2d');
  context.drawImage(newImage8, 82, 30, 134, 88);
}, false);

newImage9.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas9');
  let context = canvas.getContext('2d');
  context.drawImage(newImage9, 82, 30, 134, 88);
}, false);

newImage10.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas10');
  let context = canvas.getContext('2d');
  context.drawImage(newImage10, 82, 30, 134, 88);
}, false);

newImage11.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas11');
  let context = canvas.getContext('2d');
  context.drawImage(newImage11, 82, 30, 134, 88);
}, false);

newImage12.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas12');
  let context = canvas.getContext('2d');
  context.drawImage(newImage12, 82, 30, 134, 88);
}, false);

newImage13.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas13');
  let context = canvas.getContext('2d');
  context.drawImage(newImage13, 82, 30, 134, 88);

}, false);

newImage14.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas14');
  let context = canvas.getContext('2d');
  context.drawImage(newImage14, 82, 30, 134, 88);
}, false);

newImage15.addEventListener('load', function () {
  let canvas = document.getElementById('js-canvas15');
  let context = canvas.getContext('2d');
  context.drawImage(newImage15, 82, 30, 134, 88);
}, false);

