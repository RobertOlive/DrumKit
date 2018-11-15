window.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  })

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

function repeat(e) {
    const audio = document.querySelector(`audio[data-name="${e.target.id + 'sound'}"]`);
    const key = document.querySelector(`.key[data-name="${e.target.id + 'sound'}"]`)
    if(!audio) return;

    function repeatsound() {
        if (e.target.value == 0) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    setInterval(repeatsound, e.target.value * 2000);
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const inputNames = [];

const sliders = Array.from(document.querySelectorAll("input"));

sliders.forEach(sound=> inputNames.push(sound.id));

const inputs = document.querySelectorAll("input");
inputs.forEach(input=> input.addEventListener("change", repeat));