import { HtmlCollection } from './collection';

export class Navigation extends HtmlCollection {
  private currentPage: number;
  private indexOfLastPage: number;
  constructor () {
    super();
    this.backwardButton = this.activateElements('BackPage', '🔺');//\u1F53B
    this.forwardButton = this.activateElements('ForwardPage', '🔺'); //\u1F53B
    this.addNewPageButton = this.activateElements('NewPage', '\u2795');
    this.backwardButton.style.display = 'none';
    this.forwardButton.style.display = 'none';
    this.backwardButton.onclick = this.backwardPage.bind(this);
    this.forwardButton.onclick = this.forwardPage.bind(this);
    this.addNewPageButton.onclick = this.createNewPage.bind(this);
    this.currentPage = 0;
    this.indexOfLastPage = 0;
  }
  private activateElements(id: string, iconText: string): HTMLElement {
    const element: HTMLElement = document.createElement('DIV');
    element.className = 'NavigationButtons';
    element.id = id;
    const icon:Text = document.createTextNode(iconText);
    element.appendChild(icon);
    this.navigationBlock.appendChild(element);
    return element;
  }
  private createNewPage():void {
    const page: HTMLElement = document.createElement('UL');
    page.className = 'WorkBlock';
    this.indexOfLastPage++;
    this.body.appendChild(page);
    this.swtichPager(this.ulElements[this.currentPage], this.ulElements[this.indexOfLastPage]);
    page.addEventListener('click', function (event: MouseEvent) {
      let element = event.target as HTMLElement;
      if (element.tagName === 'LI') {
        element.classList.toggle('Checked');
      }
    } ,false);
    this.currentPage = this.indexOfLastPage;
    this.backwardButton.style.display = 'block';
    this.forwardButton.style.display = 'none';
  }
  private swtichPager(currentElement, nextElement):void {
    currentElement.id = '';
    currentElement.style.display = 'none';
    nextElement.id = 'CurrentPage';
    nextElement.style.display = 'block';
  }
  private forwardPage():void {
    this.swtichPager(this.ulElements[this.currentPage], this.ulElements[this.currentPage+1]);
    this.currentPage++;
    if (this.currentPage === this.indexOfLastPage) {
      this.forwardButton.style.display = 'none';
    }
      this.backwardButton.style.display = 'block';
  }
  private backwardPage():void {
    this.swtichPager(this.ulElements[this.currentPage], this.ulElements[this.currentPage-1]);
    this.currentPage--;
    if (!this.currentPage) {
      this.backwardButton.style.display = 'none';
    }
      this.forwardButton.style.display = 'block';
  }
}
