import './css/style.css';
import { ButtonClose } from './ts/button-close';
import { getId } from './ts/constants';
import { ListElement } from './ts/list-elements';
import { Navigation } from './ts/navigation';

const date = new Date();
document.getElementById('Date').innerHTML = date.toString();
const closeButton = new ButtonClose();
const listElement = new ListElement();
const navigationElement = new Navigation();