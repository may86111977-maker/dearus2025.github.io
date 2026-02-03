const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const bgm = document.getElementById("bgm");

// 點擊進入播放音樂
enterBtn.addEventListener("click", () => {
  bgm.play();
  intro.style.display = "none";
});

// 倒數計時（⚠️ 這裡之後你只要改時間）
const targetDate = new Date("2026-10-18T18:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.innerHTML = `還有 ${days} 天`;
}, 1000);
