import { HtmlCollection } from './collection';
import * as CONST from './constants';

export class Navigation extends HtmlCollection {
  private currentPage: number;
  private indexOfLastPage: number;
  constructor () {
    super();
    this.backwardButton = this.activateElements(CONST.BUTTON_BACKWARD_ID, CONST.BUTTON_BACKWARD_ICON);
    this.forwardButton = this.activateElements(CONST.BUTTON_FORWARD_ID, CONST.BUTTON_FORWARD_ICON); 
    this.addNewPageButton = this.activateElements(CONST.BUTTON_NEWPAGE_ID, CONST.BUTTON_NEWPAGE_ICON);
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
    element.className = CONST.BLOCK_NAVIGATION_BUTTONS_CLASS;
    element.id = id;
    const icon:Text = document.createTextNode(iconText);
    element.appendChild(icon);
    this.navigationBlock.appendChild(element);
    return element;
  }
  private createNewPage():void {
    const page: HTMLElement = document.createElement('UL');
    page.className = CONST.BLOCK_UL_CLASS;
    this.indexOfLastPage++;
    this.body.appendChild(page);
    this.swtichPager(this.ulElements[this.currentPage], this.ulElements[this.indexOfLastPage]);
    page.addEventListener('click', function (event: MouseEvent) {
      let element = event.target as HTMLElement;
      if (element.tagName === 'LI') {
        element.classList.toggle(CONST.CHECKED_CLASS);
      }
    } ,false);
    this.currentPage = this.indexOfLastPage;
    this.backwardButton.style.display = 'block';
    this.forwardButton.style.display = 'none';
  }
  private swtichPager(currentElement, nextElement):void {
    currentElement.id = '';
    currentElement.style.display = 'none';
    nextElement.id = CONST.CURRENT_PAGE_ID;
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
