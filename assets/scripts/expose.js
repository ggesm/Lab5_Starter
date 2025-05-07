// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  // const volumeImage = document.querySelector("#volume-controls img");
  const hornImage = document.querySelector("#expose img");
  // const button = document.querySelector("button");
  // const volumeSlider = document.getElementId('volume');
  const audio = document.querySelector("audio");
  // const jsConfetti = new jsConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;

    hornImage.src = `assets/images${horn}.svg`;
    hornImage.alt = horn;

    audio.src = `assets/audio/${horn}`;
  });
}
