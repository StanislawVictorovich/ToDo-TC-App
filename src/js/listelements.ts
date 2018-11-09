export class ListElement {
  private ulElement: HTMLElement;   
  constructor () {
    this.ulElement = document.getElementById('CurrentPage');
    this.ulElement.addEventListener('click', function (event: MouseEvent) {
      let element = event.target as HTMLElement;
      if (element.tagName === 'LI') {
        element.classList.toggle('Checked');
      }
    } ,false);

    const addButton = document.getElementsByClassName('addBtn');

    for (let i:number = 0; i < addButton.length; i++) {
      addButton[i].addEventListener('click', this.add);
    }
  }
  public add = (): void => {
    const liElement: HTMLLIElement = document.createElement('li');
    const inputValue: string = (<HTMLInputElement>document.getElementById('Input')).value;
    const text: Text = document.createTextNode(inputValue);
    liElement.appendChild(text);

    !inputValue ? alert('You must write something before adding.') 
                      : document.getElementById('CurrentPage').appendChild(liElement);

    (<HTMLInputElement>document.getElementById('Input')).value = '';

    const spanElement: HTMLElement = document.createElement('SPAN');
    const icon: Text = document.createTextNode('\u274C');
    spanElement.className = 'Close';
    spanElement.appendChild(icon);
    liElement.appendChild(spanElement);
    const closeElements: HTMLCollection = document.getElementsByClassName('Close');

    for (let i:number = 0; i < closeElements.length; i++) {
      closeElements[i].addEventListener ('click', function () {
        const divElement = this.parentElement;
        divElement.style.display = 'none'
      });
    }
  }
}

