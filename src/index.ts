import './css/style.css';
import { ButtonClose } from './js/buttonclose';
import { getId } from './js/constants';
import { ListElement } from './js/listelements';
import { Navigation } from './js/navigation';


getId('Date').innerHTML = new Date();
const closeButton = new ButtonClose();
const listElement = new ListElement();
const navigationElement = new Navigation();