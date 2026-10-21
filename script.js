const frame = document.getElementById("frame");
const frameCount = 116;
const images = [];

for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = `frames/frames_${i}.webp`;
  images.push(img);
}

function updateFrame() {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;

  const index = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * (frameCount - 1))
  );

  if (images[index] && images[index].complete) {
    frame.src = images[index].src;
  }

  requestAnimationFrame(updateFrame);
}

window.addEventListener("load", () => {
  requestAnimationFrame(updateFrame);
});