const wrapper = document.querySelector('.wrapper');
const title = document.querySelector('.title');
const video = document.querySelector('.video');

wrapper.addEventListener('click', () => {
  wrapper.classList.toggle('active');
  title.style.display = title.style.display === 'none' ? 'block' : 'none';
  video.paused ? video.play() : video.pause();
  video.volume = 1;
});