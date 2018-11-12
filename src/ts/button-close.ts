import { HtmlCollection } from './collection';
import * as CONST from './constants';

export class ButtonClose extends HtmlCollection {
  constructor () {
    super();
    this.buttonsCloseInit();
    this.buttonCloseClickInits();
  }
  private buttonsCloseInit():void {
    for (let element of this.listElements) {
      const spanElement: HTMLElement = document.createElement("span");
      const icon: Text = document.createTextNode(CONST.BUTTON_DELETE_TASK_ICON);
      spanElement.className = CONST.BUTTON_DELETE_TASK_CLASS;
      spanElement.appendChild(icon);
      element.appendChild(spanElement);
    }
  }
  private buttonCloseClickInits():void {
    for (let element of this.closeElements) {
      element.addEventListener ('click', function () {
        const divElement = this.parentElement; 
        divElement.style.display = 'none';
      });
    }
  }
}