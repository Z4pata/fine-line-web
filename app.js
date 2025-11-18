
 new FinisherHeader({
  "count": 800,
  "size": {
    "min": 1,
    "max": 7,
    "pulse": 0.1
  },
  "speed": {
    "x": {
      "min": 0.2,
      "max": 0.2
    },
    "y": {
      "min": 0.2,
      "max": 0.2
    }
  },
  "colors": {
    "background": "#000000",
    "particles": [
      "#ffffff",
      "#0084b7",
      "#f191ff",
      "#216dd7",
      "#a883d5",
      "#6d5aff",
      "#00fffd",
      "#FFFFFF"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 1,
    "edge": 0.45
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});
// (function(){
//     const video = document.querySelector('.video');
//     if (!video) return;

//     // Par�metros: ancho base en px y aumento por cada 417px extra
//     const baseWidth = 320;   // ancho cuando la ventana < 417
//     const step = 160;        // aumento por cada bloque de 417px
//     const maxPercentOfViewport = 0.98; // no superar 98% del ancho ventana

//     function resizeVideo(){
//         const blocks = Math.floor(window.innerWidth / 417);
//         let width = baseWidth + blocks * step;
//         // No exceder el ancho del viewport
//         const maxAllowed = Math.floor(window.innerWidth * maxPercentOfViewport);
//         if (width > maxAllowed) width = maxAllowed;
//         video.style.width = width + 'px';
//         video.style.height = 'auto';
//     }

//     window.addEventListener('resize', resizeVideo, {passive: true});
//     resizeVideo();
// })();

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});