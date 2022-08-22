import './main.scss';
import './router';
import { data } from './state/data';


const samosvalPreis = document.querySelector('.samosvalPreis');
console.log('samosvalPreis--', samosvalPreis.innerHTML);
data.setSamosvalPreis = Number(samosvalPreis.innerHTML);