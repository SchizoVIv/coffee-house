import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._title = this._popup.querySelector('.popup__title');
    this._image = this._popup.querySelector('.popup__img');
    this._subtitle = this._popup.querySelector('.popup__subtitle');
    this._sizeS = this._popup.querySelector('.popup__item_s');
    this._sizeM = this._popup.querySelector('.popup__item_m');
    this._sizeL = this._popup.querySelector('.popup__item_l');
    this._top1 = this._popup.querySelector('.popup__item_1');
    this._top2 = this._popup.querySelector('.popup__item_2');
    this._top3 = this._popup.querySelector('.popup__item_3');
    this._money = this._popup.querySelector('.popup__money');
  }
  open(card){
    this._image.src = card.image;
    this._image.alt = card.name;
    this._title.textContent = card.name;
    this._subtitle.textContent = card.description;
    this._sizeS.textContent = card.sizes.s;
    this._sizeM.textContent = card.sizes.m;
    this._sizeL.textContent = card.sizes.l;
    this._top1.textContent = card.additives[0];
    this._top2.textContent = card.additives[1];
    this._top3.textContent = card.additives[2];
    this._money.textContent = card.price;
    super.open();
  }
}
