// #2

let player = document.querySelector('.player');

let road = 0;
let bool = true;

let jump = function(bool) {
  if (bool === true) {
    player.style.top = '-100px';
    setTimeout(() => player.style.top = '0px', 300)
  } else {
    player.style.top = '0px';
  }
};

document.body.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') {
    road -= 5;
    player.style.left = `${road}px`;
  } else if (e.key === 'ArrowRight') {
    road += 5;
    player.style.left = `${road}px`;
  } else if (e.key === 'Control') {
    bool = false;
    player.style.height = '40px';
    player.style.width = '115px';
  }
});


document.body.addEventListener('keyup', (e) => {
  if (e.key === " ") {
    jump(bool);
  } else if (e.key === 'Control') {
    bool = true;
    player.style.height = '100px';
    player.style.width = '100px';
  }
});
