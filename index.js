window.addEventListener('load', () => {
   const width1 = 1366;
   const screenWidth = window.screen.width;
   const isDesctop = !(screenWidth < width1);
   const leftButton = isDesctop ? document.getElementById('leftParticipantCardButton') : document.getElementById('leftMobileButton');
   const rightButton = isDesctop ? document.getElementById('rightParticipantCardButton') : document.getElementById('rightMobileButton');
   const displayedCard = isDesctop ? document.querySelector('.displayed-card') : document.querySelector('.displayed-mobile-card');
   const totalParticipantCard = isDesctop ? document.querySelector('.total-participant-card') :document.querySelector('.total-participant-card-mobile');
   const slider = document.querySelector('.carusel-slide');
   const cards = document.querySelectorAll('.partisipant-card');
   let leftButtonIsDisabled = true;
   let numberOfCards = 3
   if(!isDesctop) {
      numberOfCards = 1
   };
   totalParticipantCard.textContent = `/${cards.length}`;
   displayedCard.textContent = numberOfCards;
   let counter = 0;
   const step = cards[0].clientWidth * numberOfCards;
   
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
         if(counter === 0) {
            leftButtonIsDisabled = true;
            leftButton.classList.add('disabled');
         }
         if(counter === 4 || isDesctop) {
            rightButton.classList = 'slider-button';
         }
         slider.style.transform = 'translateX(' + `${-step * counter}px)`;
      };
   };
   
   const moveParticipantCardsToTheRight = () => {
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
         };
         if(counter > 0) {
            leftButton.classList = 'slider-button';
         };
         slider.style.transform = 'translateX(' + `${-step * counter}px)`;
      } 
   };

   rightButton.addEventListener('click', moveParticipantCardsToTheRight);
   leftButton.addEventListener('click', moveParticipantCardsToTheLeft);

   setInterval(() => {
     if (leftButtonIsDisabled || !isDesctop) {
        if (counter === 5) {
         counter = 0;
         displayedCard.textContent = numberOfCards;
         leftButtonIsDisabled = true;
         leftButton.classList.add('disabled');
         rightButton.classList = 'slider-button';
         slider.style.transform = 'translateX(0px)';
        } else {
         moveParticipantCardsToTheRight();
        }
     } else {
        moveParticipantCardsToTheLeft();
     }
   }, 4000);

   const sliderMidleСontent = document.querySelector('.slider');
   const leftMidleButton = document.getElementById('leftSliderButton');
   const rightMidleButton = document.getElementById('rightSliderButton');
   const middleSliderCards = document.querySelectorAll('.card');
   leftMidleButton.classList.add('disabled');
   let midleCounter = 0;
   const midleStep = middleSliderCards[0].clientWidth;
   const cardCounter = document.querySelector('.card-counter');

   middleSliderCards.forEach(() => {
      let counterElipse = document.createElement('div');
      counterElipse.className = 'counter-elipse';
      cardCounter.appendChild(counterElipse);
   });

   const counterElipses = document.querySelectorAll('.counter-elipse');
   counterElipses[midleCounter].classList.add('current');

   const fillEllipse = (btn) => {
      switch (btn) {
         case 'right':
            counterElipses[midleCounter].classList.add('current');
            counterElipses[midleCounter-1].classList ='counter-elipse';
            break;
         case 'left':
            counterElipses[midleCounter].classList.add('current');
            counterElipses[midleCounter+1].classList ='counter-elipse';
            break;
      };
   };

   leftMidleButton.addEventListener('click', () => {
      if (midleCounter > 0) {
         midleCounter --;
         fillEllipse('left');
         if (midleCounter === 0) {
            leftMidleButton.classList.add('disabled');
         };
         rightMidleButton.classList = 'slider-button';
         sliderMidleСontent.style.transform = 'translateX(' + `${-midleStep * midleCounter}px)`;
      };
   });

   rightMidleButton.addEventListener('click', () => {
      if (midleCounter < 4) {
         midleCounter ++;
         fillEllipse('right');
         leftMidleButton.classList = 'slider-button';
         if (midleCounter === 4) {
            rightMidleButton.classList.add('disabled');
         };
         sliderMidleСontent.style.transform = 'translateX(' + `${-midleStep * midleCounter}px)`;
      };
   });
});