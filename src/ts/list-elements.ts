import { HtmlCollection } from './collection';
import * as CONST from './constants';

export class ListElement extends HtmlCollection {
  constructor () {
    super();
    this.ulElement = document.getElementById(CONST.CURRENT_PAGE_ID);
    this.ulElement.addEventListener('click', function (event: MouseEvent) {
      let element = event.target as HTMLElement;
      if (element.tagName === 'LI') {
        element.classList.toggle(CONST.CHECKED_CLASS);
      }
    } ,false);

    const addButton = document.getElementById(CONST.BUTTON_ADD_ID);
    addButton.addEventListener('click', this.add);
  }
  public add(): void {
    const liElement: HTMLLIElement = document.createElement('li');
    const inputValue: string = (<HTMLInputElement>document.getElementById('Input')).value;
    const text: Text = document.createTextNode(inputValue);
    liElement.appendChild(text);

    !inputValue ? alert(CONST.MESSAGE_ERROR_NO_INPUT) 
                      : document.getElementById(CONST.CURRENT_PAGE_ID).appendChild(liElement);

    (<HTMLInputElement>document.getElementById('Input')).value = '';

    const spanElement: HTMLElement = document.createElement('SPAN');
    const icon: Text = document.createTextNode(CONST.BUTTON_DELETE_TASK_ICON);
    spanElement.className = CONST.BUTTON_DELETE_TASK_CLASS;
    spanElement.appendChild(icon);
    liElement.appendChild(spanElement);
    const closeElements: HTMLCollection = document.getElementsByClassName(CONST.BUTTON_DELETE_TASK_CLASS);

    for (let element of <any>closeElements) {
      element.addEventListener ('click', function () {
        const divElement = this.parentElement;
        divElement.style.display = 'none'
      });
    }
  }
}

