import { HtmlCollection } from './collection';

export class ButtonClose extends HtmlCollection {
  constructor () {
    super();
    this.buttonsCloseInit();
    this.buttonCloseClickInits();
  }
  private buttonsCloseInit():void {
    for (let i:number = 0; i < this.listElements.length; i++) {
      const spanElement: HTMLElement = document.createElement("span");
      const icon: Text = document.createTextNode('\u274C');
      spanElement.className = 'Close';
      spanElement.appendChild(icon);
      this.listElements[i].appendChild(spanElement);
    }
  }
  private buttonCloseClickInits():void {
    const closeElements: HTMLCollection = document.getElementsByClassName('Close');
    for (let i:number = 0; i < closeElements.length; i++) {
      closeElements[i].addEventListener ('click', function () {
        const divElement = this.parentElement; 
        divElement.style.display = 'none';
      });
    }
  }
}