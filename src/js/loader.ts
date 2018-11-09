export class Loader {
  private bodyElement: HTMLBodyElement;
  private divOperationBlockElement: HTMLDivElement;
  private h4DateElement: HTMLHeadingElement;
  private inputElement: HTMLInputElement;
  private spanAddBtnElement: HTMLButtonElement;
  private divPagesElement: HTMLDivElement;
  private ulCurrentPageElement: HTMLUListElement;
  private divNavigationBlockElement: HTMLDivElement;
  constructor () {
    this.bodyElement = document.getElementById('app');
    this.divOperationBlockElement = document.createElement('div');
    this.divOperationBlockElement.id = 'OperationBlock';
    this.divOperationBlockElement.className = 'Header';
    this.bodyElement.appendChild(this.divOperationBlockElement);

    this.h4DateElement = document.createElement('h4');
    this.h4DateElement.id = 'Date';
    this.divOperationBlockElement.appendChild(this.h4DateElement);
    this.inputElement = document.createElement('input');
    this.inputElement.type = 'text';
    this.inputElement.id = 'Input';
    this.inputElement.placeholder = 'Type, please...';
    this.divOperationBlockElement.appendChild(this.inputElement);
    this.spanAddBtnElement = document.createElement('span');
    this.spanAddBtnElement.className = 'addBtn';
    this.spanAddBtnElement.innerHTML = 'Add';
    this.divOperationBlockElement.appendChild(this.spanAddBtnElement);

    this.divPagesElement = document.createElement('div');
    this.divPagesElement.id = 'Pages';
    this.bodyElement.appendChild(this.divPagesElement);
    this.ulCurrentPageElement = document.createElement('ul');
    this.ulCurrentPageElement.id = 'CurrentPage';
    this.ulCurrentPageElement.className = 'WorkBlock';
    this.divPagesElement.appendChild(this.ulCurrentPageElement);

    this.divNavigationBlockElement = document.createElement('div');
    this.divNavigationBlockElement.id = 'NavigationBlock';
    this.bodyElement.appendChild(this.divNavigationBlockElement); 
  }
}
