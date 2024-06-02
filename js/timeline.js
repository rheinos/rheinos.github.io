
     "use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('article', true);
const timeline = qs('.history');
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
  const {
    scrollY
  } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();

  const dist = targetY - timelineRect.top;
  console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
  }

  sections.forEach(item => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add('visible');
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
window.addEventListener('scroll', scrollHandler);
