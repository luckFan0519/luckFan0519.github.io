const canvas = document.getElementById("petal-canvas");
const ctx = canvas.getContext("2d");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const typingLine = document.getElementById("typing-line");
let petals = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.min(35, Math.max(12, Math.floor(window.innerWidth / 50)));
  petals = Array.from({ length: count }, () => createPetal());
}

function createPetal() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 4,
    speedY: Math.random() * 0.8 + 0.3,
    speedX: Math.random() * 0.6 - 0.3,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.02,
    opacity: Math.random() * 0.3 + 0.15,
    swingAmp: Math.random() * 30 + 10,
    swingSpeed: Math.random() * 0.01 + 0.005,
    phase: Math.random() * Math.PI * 2,
    type: Math.floor(Math.random() * 3)
  };
}

function drawPetal(p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = p.opacity;

  if (p.type === 0) {
    // 花瓣形
    ctx.fillStyle = "#E8A0B4";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(p.size / 2, -p.size, p.size, -p.size / 2, 0, p.size);
    ctx.bezierCurveTo(-p.size, -p.size / 2, -p.size / 2, -p.size, 0, 0);
    ctx.fill();
  } else if (p.type === 1) {
    // 圆点花瓣
    ctx.fillStyle = "#D4A0B0";
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.4, p.size * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // 银杏叶形
    ctx.fillStyle = "#C9A96E";
    ctx.beginPath();
    ctx.moveTo(0, p.size);
    ctx.bezierCurveTo(p.size, -p.size * 0.3, p.size * 0.5, -p.size, 0, -p.size * 0.3);
    ctx.bezierCurveTo(-p.size * 0.5, -p.size, -p.size, -p.size * 0.3, 0, p.size);
    ctx.fill();
  }

  ctx.restore();
}

let time = 0;
function drawPetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time += 1;

  petals.forEach((p) => {
    p.y += p.speedY;
    p.x += p.speedX + Math.sin(time * p.swingSpeed + p.phase) * 0.3;
    p.rotation += p.rotSpeed;

    if (p.y > canvas.height + 20) {
      p.y = -20;
      p.x = Math.random() * canvas.width;
    }
    if (p.x < -20) p.x = canvas.width + 20;
    if (p.x > canvas.width + 20) p.x = -20;

    drawPetal(p);
  });

  requestAnimationFrame(drawPetals);
}

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("open");
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    siteNav?.classList.remove("open");
  });
});

const typingPhrases = [
  "研习医学图像分割之道……",
  "探寻图像去雾之法……",
  "锻造微信小程序之器……",
  "参悟数据挖掘之理……",
  "修习Python自动化之术……"
];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeStatus() {
  if (!typingLine) return;
  const phrase = typingPhrases[phraseIndex];
  typingLine.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex += 1;
    setTimeout(typeStatus, 72);
    return;
  }
  if (!deleting && charIndex === phrase.length) {
    deleting = true;
    setTimeout(typeStatus, 1800);
    return;
  }
  if (deleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeStatus, 36);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % typingPhrases.length;
  setTimeout(typeStatus, 300);
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 80}ms`;
    observer.observe(item);
  });
}

function setupTilt() {
  const cards = document.querySelectorAll(".tilt-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-2px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawPetals();
typeStatus();
setupReveal();
setupTilt();
