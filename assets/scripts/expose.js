// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  // const volumeImage = document.querySelector("#volume-controls img");
  const hornImage = document.querySelector("img");
  // const button = document.querySelector("button");
  // const volumeSlider = document.getElementById('volume');
  const audio = document.querySelector("audio");
  // const jsConfetti = new jsConfetti();

  hornSelect.addEventListener('change', () => {
    const hornInfo = hornSelect.value;
    hornImage.src = `assets/images/${hornInfo}.svg`;
    audio.src = `assets/audio/${hornInfo}.mp3`;
  });
}
