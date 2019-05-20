import getClips from '../../models/ModelGetClips';

export default function moveSlider(userRequest) {
  const slider = document.querySelector('.slider');
  getClips(userRequest, slider);
  let clipNumber = 1;
  let pageNumber = 1;
  document.querySelector('.number').innerHTML = `${pageNumber}`;
  const currentX = 0;
  let pressed = false;
  let pressedButton = false;
  let startX;
  let walk;
  let newPosition;

  function amountClips(width) {
    if (width >= 1320) {
      return 4;
    }
    if (width >= 1000) {
      return 3;
    }
    if (width >= 700) {
      return 2;
    }
    return 1;
  }

  function handler() {
    if (walk >= 0 && clipNumber === 1) {
      pressed = false;
      slider.style.left = '';
      return;
    }
    if (walk > 0) {
      pressed = false;
      slider.style.left = '';
      const width = +(getComputedStyle(document.body).width.replace('px', ''));
      clipNumber -= amountClips(width);
      if (clipNumber < 1) {
        clipNumber = 1;
      }
      pageNumber = Math.ceil(clipNumber / amountClips(width));
      document.querySelector('.number').innerHTML = `${pageNumber}`;
      newPosition = (document.querySelector(`.clip-wrapper:nth-child(${clipNumber})`).offsetLeft) || 0;
      slider.style.transform = `translate(-${newPosition}px)`;
    }
    if (walk < 0) {
      pressed = false;
      slider.style.left = '';
      const width = +(getComputedStyle(document.body).width.replace('px', ''));
      clipNumber += amountClips(width);
      pageNumber = Math.ceil(clipNumber / amountClips(width));
      document.querySelector('.number').innerHTML = `${pageNumber}`;
      newPosition = (document.querySelector(`.clip-wrapper:nth-child(${clipNumber})`).offsetLeft) || 0;
      slider.style.transform = `translate(-${newPosition}px)`;
      if (document.querySelector(`.clip-wrapper:nth-child(${clipNumber + 8})`) === null) {
        getClips(userRequest, slider);
      }
    }
  }

  window.addEventListener('resize', () => {
    const width = +(getComputedStyle(document.body).width.replace('px', ''));
    pageNumber = Math.ceil(clipNumber / amountClips(width));
    document.querySelector('.number').innerHTML = `${pageNumber}`;
    newPosition = (document.querySelector(`.clip-wrapper:nth-child(${clipNumber})`).offsetLeft) || 0;
    slider.style.transform = `translate(-${newPosition}px)`;
  });

  slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.pageX;
  });
  slider.addEventListener('mouseleave', () => {
    if (!pressed) return;
    handler();
  });
  slider.addEventListener('mouseup', (e) => {
    e.preventDefault();
    handler();
  });
  slider.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    walk = (e.pageX - startX);
    slider.style.left = `${walk + currentX}px`;
  });

  slider.addEventListener('touchstart', (e) => {
    pressed = true;
    startX = e.touches[0].pageX;
  });
  slider.addEventListener('touchend', (e) => {
    e.preventDefault();
    handler();
  });
  slider.addEventListener('touchmove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    walk = (e.touches[0].pageX - startX);
    slider.style.left = `${walk + currentX}px`;
  });

  document.querySelector('.previous').addEventListener('click', () => {
    const width = +(getComputedStyle(document.body).width.replace('px', ''));
    clipNumber -= amountClips(width);
    if (clipNumber < 1) {
      clipNumber = 1;
    }
    pageNumber = Math.ceil(clipNumber / amountClips(width));
    document.querySelector('.number').innerHTML = `${pageNumber}`;
    newPosition = (document.querySelector(`.clip-wrapper:nth-child(${clipNumber})`).offsetLeft) || 0;
    slider.style.transform = `translate(-${newPosition}px)`;
  });

  document.querySelector('.next').addEventListener('click', () => {
    const width = +(getComputedStyle(document.body).width.replace('px', ''));
    clipNumber += amountClips(width);
    pageNumber = Math.ceil(clipNumber / amountClips(width));
    document.querySelector('.number').innerHTML = `${pageNumber}`;
    newPosition = (document.querySelector(`.clip-wrapper:nth-child(${clipNumber})`).offsetLeft) || 0;
    slider.style.transform = `translate(-${newPosition}px)`;
    if (document.querySelector(`.clip-wrapper:nth-child(${clipNumber + 8})`) === null) {
      getClips(userRequest, slider);
    }
  });

  document.querySelector('.next').addEventListener('mousedown', () => {
    pressedButton = true;
    document.querySelector('.next').insertAdjacentHTML('beforeend', `<div class='tip'>${pageNumber + 1}</div>`);
  });

  document.querySelector('.next').addEventListener('mouseup', () => {
    if (!pressedButton) return;
    document.querySelector('.next').removeChild(document.querySelector('.tip'));
    pressedButton = false;
  });

  document.querySelector('.next').addEventListener('mouseleave', () => {
    if (!pressedButton) return;
    document.querySelector('.next').removeChild(document.querySelector('.tip'));
    pressedButton = false;
  });

  document.querySelector('.previous').addEventListener('mousedown', () => {
    pressedButton = true;
    document.querySelector('.previous').insertAdjacentHTML('beforeend', `<div class='tip'>${pageNumber - 1}</div>`);
  });

  document.querySelector('.previous').addEventListener('mouseup', () => {
    if (!pressedButton) return;
    document.querySelector('.previous').removeChild(document.querySelector('.tip'));
    pressedButton = false;
  });

  document.querySelector('.previous').addEventListener('mouseleave', () => {
    if (!pressedButton) return;
    document.querySelector('.previous').removeChild(document.querySelector('.tip'));
    pressedButton = false;
  });
}
