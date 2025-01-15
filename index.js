window.addEventListener("load", () => {
   console.log("hello");
   const leftButton = document.getElementById("leftParticipantCardButton");
   const rightButton = document.getElementById("rightParticipantCardButton");
   const counterLine = document.getElementById("participantСardСounter");
   const slider = document.getElementById("slider");
   const cards = document.querySelectorAll(".partisipant-card");
   let counter = 0;
   const step = cards[0].clientWidth;
   console.log("step", step);
   slider.style.translate = 'translateX(' + `${-step * counter}px)`;
   rightButton.addEventListener('click', () => {
    counter ++
    slider.style.translate = 'translateX(' + `${-step * counter}px)`;
   })
});