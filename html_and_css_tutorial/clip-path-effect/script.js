const container = document.getElementById("container");
const blob = document.getElementById("blobPath");
const svg = document.getElementById("svg");

const baseImg = document.getElementById("baseImg");
const topImg = document.getElementById("topImg");
const text = document.getElementById("bounceText");

// Images
let img1 = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
let img2 = "https://images.unsplash.com/photo-1501785888041-af3ef285b470";

let currentBase = img1;
let currentTop = img2;

// Cursor positions
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;

let currentX = targetX;
let currentY = targetY;

// Smooth follow
const speed = 0.12;

// Blob sizes
let baseSize = 80;
let maxSize = 2500;
let currentSize = baseSize;

// Timing control
let phase = "idle";
let startTime = Date.now();
let textPlayed = false;

// Amoeba motion
let t = 0;

// SVG fix
function resizeSVG() {
  svg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);
}
resizeSVG();
window.addEventListener("resize", resizeSVG);

// Track mouse
container.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

// Pixar text trigger
function showPixarText() {

  async function loop(){

    while (true){

      await new Promise(res => setTimeout(res, 2000));

      // Play bounce animation
      text.style.transition = "";
      text.style.animation = "pixarBounce 0.9s ease-out forwards";
      text.style.opacity = 1;

      // Wait for animation to finish
      await new Promise(res => setTimeout(res, 900));

      // Lock text in final position so it stays visible
      text.style.animation = "";
      text.style.top = "50%";
      text.style.transform = "translate(-50%, -50%) scaleY(1)";
      text.style.opacity = 1;

      // Stay visible for 5 seconds
      await new Promise(res => setTimeout(res, 3000));

      // Fade out smoothly
      text.style.transition = "opacity 0.4s ease";
      text.style.opacity = 0;

      // Wait for fade, then reset position for next loop
      await new Promise(res => setTimeout(res, 400));
      text.style.transition = "";
      text.style.top = "-120px";
      text.style.transform = "translateX(-50%) scaleY(1)";

      await new Promise(res => setTimeout(res, 2000));
    }
    
  }
  loop()
  
}

// Swap images
function swapImages() {
  let temp = currentBase;
  currentBase = currentTop;
  currentTop = temp;

  baseImg.src = currentBase;
  topImg.src = currentTop;
}

// Main animation loop
function animate() {
  let now = Date.now();
  let elapsed = now - startTime;

  // Smooth cursor follow
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;

  // Start amoeba growth AFTER text
  if (phase === "idle" && elapsed > 3800) {
    phase = "grow";
  }

  // Growth phase (3.8s → 5s)
  if (phase === "grow") {
    let progress = Math.min((elapsed - 3800) / 1200, 1);

    currentSize = baseSize + (maxSize - baseSize) * progress;

    if (progress >= 1) {
      // Swap only after full coverage
      swapImages();

      // Reset cycle
      startTime = Date.now();
      phase = "idle";
      textPlayed = false;
      currentSize = baseSize;
    }
  }

  // ===== AMOEBA SHAPE =====

  let points = [];
  let count = 24;

  for (let i = 0; i < count; i++) {
    let angle = (i / count) * Math.PI * 2;

    let noise =
      Math.sin(t + i * 0.8) * 12 +
      Math.cos(t * 0.6 + i) * 10;

    let radius = currentSize + noise;

    let x = currentX + Math.cos(angle) * radius;
    let y = currentY + Math.sin(angle) * radius;

    points.push(`${x},${y}`);
  }

  let path = `M ${points.join(" L ")} Z`;
  blob.setAttribute("d", path);

  t += 0.05;

  requestAnimationFrame(animate);
}

showPixarText();

animate();