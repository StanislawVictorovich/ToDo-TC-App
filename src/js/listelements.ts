import { getId } from './constants'

export class ListElement {
  private ulElement: HTMLUListElement;   
  constructor () {
    this.ulElement = getId('CurrentPage');
    this.ulElement.addEventListener('click', function (element: MouseEvent) {
      if (element.target.tagName === 'LI') {
        element.target.classList.toggle('Checked');
      }
    } ,false);

    const addButton = document.getElementsByClassName('addBtn');

    for (let i:number = 0; i < addButton.length; i++) {
      addButton[i].onclick = this.add;
    }
  }
  public add = (): void => {
    const liElement: HTMLLIElement = document.createElement('li');
    const inputValue: string = getId('Input').value;
    const text: Text = document.createTextNode(inputValue);
    liElement.appendChild(text);

    !inputValue ? alert('You must write something before adding.') 
                      : getId('CurrentPage').appendChild(liElement);

    getId('Input').value = '';

    const spanElement: HTMLElement = document.createElement('SPAN');
    const icon: Text = document.createTextNode('\u274C');
    spanElement.className = 'Close';
    spanElement.appendChild(icon);
    liElement.appendChild(spanElement);
    const closeElements: HTMLCollection = document.getElementsByClassName('Close');

    for (let i:number = 0; i < closeElements.length; i++) {
      closeElements[i].onclick = function () {
        const divElement = this.parentElement;
        divElement.style.display = 'none'
      }
    }
  }
}

