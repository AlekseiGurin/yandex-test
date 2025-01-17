window.addEventListener("load", () => {
   console.log("hello");
   const width1 = 1366;
   const screenWidth = window.screen.width;
   const isDesctop = !(screenWidth < width1);
   const leftButton = isDesctop ? document.getElementById("leftParticipantCardButton") : document.getElementById("leftMobileButton");
   const rightButton = isDesctop ? document.getElementById("rightParticipantCardButton") : document.getElementById("rightMobileButton");
   const displayedCard = isDesctop ? document.querySelector(".displayed-card") : document.querySelector(".displayed-mobile-card");
   const totalParticipantCard = isDesctop ? document.querySelector(".total-participant-card") :document.querySelector(".total-participant-card-mobile");
   console.log("totalParticipantCard", totalParticipantCard);
   const slider = document.querySelector(".carusel-slide");
   const cards = document.querySelectorAll(".partisipant-card");
   let leftButtonIsDisabled = true;
   let numberOfCards = 3
   if(!isDesctop) {
      numberOfCards = 1
   };
   totalParticipantCard.textContent = `/${cards.length}`;
   displayedCard.textContent = numberOfCards;
   let counter = 0;
   const step = cards[0].clientWidth * numberOfCards;
   console.log("step", step);
   console.log("counter", counter);
   console.log("screenWidth", screenWidth);
   console.log("isDesctop", isDesctop);
   
   if (!counter) {
      leftButton.classList.add('disabled');
   } 
   const moveParticipantCardsToTheLeft = () => {
      if (!leftButtonIsDisabled) {
         if (!isDesctop) {
            displayedCard.textContent = counter;
         } else {
            displayedCard.textContent = numberOfCards;
         };
         counter --;
         console.log("click leftButton");
         console.log("counter", counter);
         console.log("step", step);
         if(counter === 0) {
            leftButtonIsDisabled = true;
            leftButton.classList.add('disabled');
         }
         console.log("click")
         rightButton.classList = "slider-button";
         console.log("-step * counter + step", -step * counter + step)
         slider.style.transform = 'translateX(' + `${-step * counter}px)`;
      };
   };
   const moveParticipantCardsToTheRight = () => {
      console.log("click rightButton")
      if (counter < cards.length -1) {
         counter ++
         leftButtonIsDisabled = false;
         if (!isDesctop) {
            displayedCard.textContent = counter + 1;
         } else {
            displayedCard.textContent = numberOfCards + numberOfCards;
         };
         if (isDesctop || !isDesctop && counter === cards.length - 1) {
            rightButton.classList.add('disabled');
         }
         leftButton.classList = "slider-button";
         console.log("-step * counter", -step * counter)
         slider.style.transform = 'translateX(' + `${-step * counter}px)`;
      } 
      console.log("counter", counter);
   }
   rightButton.addEventListener('click', moveParticipantCardsToTheRight);
   leftButton.addEventListener('click', moveParticipantCardsToTheLeft);
   // setInterval(() => {
   //    console.log("setTimeout")
   //   if (leftButtonIsDisabled || screenWidth < width1 && counter < 6) {
   //      moveParticipantCardsToTheRight();
   //   } else {
   //    if (screenWidth < width1) {
         
   //    }
   //      moveParticipantCardsToTheLeft();
   //   }
   // }, 4000)
});