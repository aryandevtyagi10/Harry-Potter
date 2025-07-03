const text = "Welcome to Hogwarts School of Witchcraft & Wizardry...";
let i = 0, speed = 80;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

const audio = new Audio('y2mate-com-harry-potter-ringtone-bgm-tone-54095.mp3');
document.getElementById('playBtn').addEventListener('click', () => {
  audio.paused ? audio.play() : audio.pause();
});