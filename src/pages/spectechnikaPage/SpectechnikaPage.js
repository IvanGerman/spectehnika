//import { SamosvalLogicClass } from "../../components/uslugiComponents/UslugiLogicClass";
import { currentKeyName, description, prices, sectionName, srcPath } from '../../state/data';
import './SpectechnikaPage.scss';


const SpectechnikaPage = {
  render: async () => {
    document.documentElement.scrollTop = document.body.scrollTop = 950;
    const view = `
      <div class="spectechnikaPage">
        <h2>${sectionName[currentKeyName.currentKeyName]}</h2>
        <img src="${srcPath[currentKeyName.currentKeyName]}" alt="" class="spectechImage"/>
        <div class="navlinks" >
          <p class="navlinksP">Спецтехника:</p>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <p class="navlinksP">Услуги:</p>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
          <a href="#/">gdgd</a>
        </div>
        <p class="spectechnikaDeskription">${description[currentKeyName.currentKeyName]}</p>
        <p class="spectechnikaPagePreisP">От <span class="spectechnikaPagePreis">2500</span> рублей/час</p>
      
        <a href="#/"><div class="backBtn">Назад</div></a>
      </div>
    `;
    return view;
  },
  after_render: async () => {
    //new SamosvalLogicClass ();
    
    const spectechnikaPagePreis = document.querySelector('.spectechnikaPagePreis');
    // prices.setKey = currentKeyName.currentKeyName;
    // prices.setValue = 
    spectechnikaPagePreis.innerHTML = prices[currentKeyName.currentKeyName] 
  },
};

export default SpectechnikaPage;
