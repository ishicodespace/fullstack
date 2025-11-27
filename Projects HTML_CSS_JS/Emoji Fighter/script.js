let fighters = [
  "🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯",
  "🦁","🐮","🐷","🐸","🐵","🐔","🐧","🐦","🐤","🐣",
  "🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛",
  "🦋","🐌","🐞","🐜","🦟","🦗","🐢","🐍","🦎","🦂",
  "🦀","🦞","🦐","🐙","🐠","🐟","🐡","🐳","🐋","🦈",
  "🐊","🦒","🦓","🐘","🦏","🦛","🐪","🐫","🦘","🦙",
  "🐄","🐑","🐐","🐕","🐈","🐓","🦃","🦢","🦩","🐇"
]
let stage = document.querySelector(".stage");
let fightBtn = document.querySelector("button");

fightBtn.addEventListener("click", () => {
  let fighter1 = fighters[Math.floor(Math.random() * fighters.length)];
    let fighter2 = fighters[Math.floor(Math.random() * fighters.length)];
    stage.textContent = `${fighter1} VS ${fighter2}`;
});
