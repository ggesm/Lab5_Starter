// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.getElementById("sound-image");
  const audio = document.getElementById("horn-sound");
  const volumeImage = document.getElementById("volume-image");
  const volumeSlider = document.getElementById('volume');
  const button = document.querySelector("button");
  const jsConfetti = new jsConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    
    if (horn === "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (horn === "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (horn === "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
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
