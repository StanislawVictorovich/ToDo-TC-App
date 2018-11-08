abstract class HtmlCollection {
  protected navigationBlock: HTMLElement;
  protected backwardButton: HTMLElement;
  protected forwardButton: HTMLElement;
  protected addNewPageButton: HTMLElement;
  protected body: HTMLBodyElement;
  protected ulElements: HTMLCollection;  
  constructor () {
    this.navigationBlock = document.getElementById('NavigationBlock');
    this.body = document.getElementsByTagName('body')[0];
    this.ulElements = document.getElementsByTagName('UL');    
  }
}

export class Navigation extends HtmlCollection {
  private currentPage: number;
  private indexOfLastPage: number;
  constructor () {
    super();
    this.backwardButton = this.activateElements('BackPage', '\u1F53B');
    this.forwardButton = this.activateElements('ForwardPage', '\u1F53A');
    this.addNewPageButton = this.activateElements('NewPage', '\u2795');
    this.backwardButton.onclick = this.backwardPage;
    this.forwardButton.onclick = this.forwardPage;
    this.addNewPageButton.onclick = this.createNewPage;
    this.currentPage = 0;
    this.indexOfLastPage = 0;
  }
  private activateElements = (id: string, iconText: Text): HTMLDivElement => {
    const element: HTMLDivElement = document.createElement('DIV');
    element.className = 'NavigationButtons';
    element.id = id;
    const icon:Text = document.createTextNode(iconText);
    element.appendChild(icon);
    this.navigationBlock.appendChild(element);
    return element;
  }
  private createNewPage = ():void => {
    const page: HTMLUListElement = document.createElement('UL');
    page.className = 'WorkBlock';
    this.ulElements[this.currentPage++].style.display = 'none'; 
    this.indexOfLastPage++;
    this.body.appendChild(page);console.log(`${this.currentPage} >>> ${this.indexOfLastPage}`);
  }
  private swtichPager = (currentElement: HTMLElement, nextElement: HTMLElement):void => {
    currentElement.id = '';
    currentElement.style.display = 'none';
    nextElement.id = 'CurrentPage';
    nextElement.style.display = 'block';
  }
  private forwardPage = ():void => {console.log(`${this.currentPage} >>> ${this.indexOfLastPage}`);
    if (this.currentPage < this.indexOfLastPage) {
      this.swtichPager(this.ulElements[this.currentPage], this.ulElements[this.currentPage+1]);
      this.currentPage++;
    } else {
      this.forwardButton.style.display = 'none';
    }
      this.backwardButton.style.display = 'block';
  }
  private backwardPage = ():void => {
    if (this.currentPage > 0) {console.log(`${this.currentPage} >>> ${this.indexOfLastPage}`);
      this.swtichPager(this.ulElements[this.currentPage], this.ulElements[this.currentPage-1]);
      this.currentPage--;
    } else {
      this.backwardButton.style.display = 'none';
    }
      this.forwardButton.style.display = 'block';
  }
}