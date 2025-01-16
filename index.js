window.addEventListener("load", () => {
   console.log("hello");
   const width1 = 1366;
   const screenWidth = window.screen.width;
   const leftButton = document.getElementById("leftParticipantCardButton");
   const rightButton = document.getElementById("rightParticipantCardButton");
   const slider = document.querySelector(".carusel-slide");
   const displayedCard = document.querySelector(".displayed-card");
   const totalParticipantCard = document.querySelector(".total-participant-card");
   const cards = document.querySelectorAll(".partisipant-card");
   let leftButtonISdisabled = true;
   let numberOfCards = 3
   if(screenWidth < width1) {
      numberOfCards = 1
   };
   totalParticipantCard.textContent = `/${cards.length}`;
   displayedCard.textContent = numberOfCards;
   let counter = 0;
   const step = cards[0].clientWidth * numberOfCards;
   console.log("step", step);
   console.log("screenWidth", screenWidth);
   if (!counter) {
      leftButton.classList.add('disabled');
   } 
   const moveParticipantCardsToTheLeft = () => {
      if (!leftButtonISdisabled) {
         counter --
         console.log("click leftButton")
         leftButtonISdisabled = true;
         if (screenWidth < width1) {
            displayedCard.textContent = counter - numberOfCards;
         } else {
            displayedCard.textContent = numberOfCards;
         };
         console.log("click")
         rightButton.classList = "participant-card-button";
         leftButton.classList.add('disabled');
         slider.style.transform = 'translateX(' + `${step * counter}px)`;
      }
   }
   const moveParticipantCardsToTheRight = () => {
      console.log("click rightButton")
      if (leftButtonISdisabled) {
         counter ++
         leftButtonISdisabled = false;
         if (screenWidth < width1) {
            displayedCard.textContent = counter + numberOfCards;
         } else {
            displayedCard.textContent = numberOfCards + numberOfCards;
         };
         leftButton.classList = "participant-card-button";
         rightButton.classList.add('disabled');
         slider.style.transform = 'translateX(' + `${-step * counter}px)`;
      }
   }
   rightButton.addEventListener('click', moveParticipantCardsToTheRight);
   leftButton.addEventListener('click', moveParticipantCardsToTheLeft);

});