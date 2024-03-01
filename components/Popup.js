export default class Popup{
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this.buttonClose = this._popup.querySelector('.popup__button-close')
  }
  open(){
    this._popup.classList.remove('popup_hidden');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close(){
    if (this._popup !== undefined) {
      this._popup.classList.add('popup_hidden');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners(){
    this._popup.addEventListener('mousedown', evt => {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__button-close')) {
        this.close();
      }
    });
  }
}
