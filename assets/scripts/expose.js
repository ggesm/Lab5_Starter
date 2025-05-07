// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeImage = document.querySelector("#volume-controls img");
  const hornImage = document.querySelector("#expose img");
  const button = document.querySelector("button");
  const volumeSlider = document.getElementId('volume');
  const audio = document.querySelector("audio");
  const jsConfetti = new jsConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;

    hornImage.src = `assets/images${horn}.svg`;
    hornImage.alt = horn;

    audio.src = `assets/audio/${horn}`;
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;
    audio.volume = volumeValue/100;

    if (volumeValue == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue < 33 ) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-4.svg";
    }
  });

  button.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
