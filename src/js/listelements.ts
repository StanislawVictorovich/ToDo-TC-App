export class ListElement {
  private ulElement: HTMLUListElement;   
  constructor () {
    this.ulElement = document.getElementById('CurrentPage');
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
    const inputValue: string = document.getElementById('Input').value;
    const text: Text = document.createTextNode(inputValue);
    liElement.appendChild(text);

    !inputValue ? alert('You must write something before adding.') 
                      : document.getElementById('CurrentPage').appendChild(liElement);

    document.getElementById('Input').value = '';

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

