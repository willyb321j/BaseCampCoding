const heartsContainer = document.querySelector("#hearts-container");
const controlsContainer = document.querySelector("#controls-container");
const hitButton = controlsContainer.querySelector("#hit-button");
const hitDamageInput = controlsContainer.querySelector("#hit-damage-input");
const healButton = controlsContainer.querySelector("#heal-button");
const healInput = controlsContainer.querySelector("#heal-amount-input");
const addHeartButton = controlsContainer.querySelector("#add-heart-container-button");
const overhealButton = controlsContainer.querySelector("#overheal-button");
const overhealInput = controlsContainer.querySelector("#overheal-amount-input");


let health = 35;
let maxHealth = 40;

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo) + lo);
}

function updateHeartsDisplay() {
  let quartersToFill = health;
  for (const heart of heartsContainer.querySelectorAll(".heart")) {
    if (quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      heart.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      heart.dataset.quarters = 0;
    }
  }
}

hitButton.addEventListener("click", function () {
  let damage = Number(hitDamageInput.value);
  health = Math.max(0, health - damage);
  updateHeartsDisplay();
});

healButton.addEventListener("click", function(){
  let heal = Number(healInput.value) *4
  health = Math.max(0, health + heal)
  updateHeartsDisplay();
});
addHeartButton.addEventListener("click", function(){
  heartsContainer.insertAdjacentHTML('beforeend', 
  `<div class="heart" data-quarters="4">
    <div class="top-left"></div>
    <div class="top-right"></div>
    <div class="bottom-left"></div>
    <div class="bottom-right"></div>
  </div>`);
    maxHealth += 4;
    updateHeartsDisplay();
  });
overhealButton.addEventListener("click", function (){
  let overHeal = Number(overhealInput.value)
  health = maxHealth +4
  updateHeartsDisplay();
})