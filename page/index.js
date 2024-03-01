import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import cards from '../models/cards.js';

const cardsContainer = document.querySelector(".menu__conteiner-items")

const popupWithImage = new PopupWithImage('.popup-open-img')
popupWithImage.setEventListeners();

function handlePopupOpen(card){
    popupWithImage.open(card);
  }

const sectionList = new Section(
    {
      renderer: cardData => {
        const newCardElement = createCard(cardData);
        sectionList.addItem(newCardElement);
      }
    },
    cardsContainer
  );
