function updateRainDistance() {
  const wrapper = document.querySelector(".sceneWrapper");
  if (!wrapper) return;

  // Abstand vom oberen Rand + Höhe der Szene
  const topOffset = wrapper.offsetTop;
  const height = wrapper.offsetHeight;

  // +20px Versatz, damit die Splats etwas unterhalb sichtbar sind
  const distance = topOffset + height + 185;

  // CSS-Variable setzen
  document.documentElement.style.setProperty(
    "--drop-distance",
    distance + "px"
  );
  document.documentElement.style.setProperty(
    "--drop-distance-umbrella",
    height - 15 + "px"
  );
}

function makeItRain() {
  // alles leeren
  document.querySelector(".rain.front").innerHTML = "";
  document.querySelector(".rain.back").innerHTML = "";

  let gain = 0;
  let drops = "";
  let backDrops = "";
  let umbrellaHitDrops = "";

  while (gain < 100) {
    let randH = Math.floor(Math.random() * 98) + 1; // 1–98
    let randF = Math.floor(Math.random() * 4) + 2; // 2–5
    gain += randF;

    drops += `
      <div class="raindrop"
        style="left: ${gain}%; bottom: ${randF + randF - 1 + 100}%;
        animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        <div class="raindropBody"
          style="animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        </div>
        <div class="splat"
          style="animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        </div>
      </div>`;

    backDrops += `
      <div class="raindrop"
        style="right: ${gain}%; bottom: ${randF + randF - 1 + 100}%;
        animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        <div class="raindropBody"
          style="animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        </div>
        <div class="splat"
          style="animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        </div>
      </div>`;

    umbrellaHitDrops += `
      <div class="raindrop"
        style="right: ${gain}%; bottom: ${randF + randF - 1 + 100}%;
        animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        <div class="raindropBody"
          style="animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        </div>
        <div class="splat"
          style="animation-delay: 0.${randH}s; animation-duration: 0.5${randH}s;">
        </div>
      </div>`;
  }

  document.querySelector(".rain.front").innerHTML = drops;
  document.querySelector(".rain.back").innerHTML = backDrops;
  document.querySelector(".rain.hitTotoro").innerHTML = umbrellaHitDrops;
}

// starten, sobald DOM fertig ist
document.addEventListener("DOMContentLoaded", () => {
  updateRainDistance();
  makeItRain();
});

window.addEventListener("resize", updateRainDistance);
