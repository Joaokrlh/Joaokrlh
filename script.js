
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'px';
  heart.style.animationDuration = (2 + Math.random() * 2) + 's';
  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function openEnvelope() {
  document.getElementById('envelope').classList.add('open');
  document.getElementById('flap').classList.add('open');
  document.getElementById('letter').classList.add('open');

  window.heartInterval = setInterval(createHeart, 300);
}

function resetEnvelope() {
  document.getElementById('envelope').classList.remove('open');
  document.getElementById('flap').classList.remove('open');
  document.getElementById('letter').classList.remove('open');

  clearInterval(window.heartInterval);
  document.getElementById('hearts').innerHTML = '';
}
