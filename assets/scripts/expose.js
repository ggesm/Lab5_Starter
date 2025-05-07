// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const playButon = document.querySelector('button');
  const jsConfetti = new jsConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value
    hornTmage.src = `assets/images/${horn}.svg`
    audio.src = `assets/audio/${horn}.mp3`
  });

  volumeSlider.addEventListener('input', {} => {
    const volume = volumeSlider.value;
    audio.volume = volume/100;
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
