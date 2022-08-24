//import { SamosvalLogicClass } from "../../components/uslugiComponents/UslugiLogicClass";
import { currentKeyName, description, prices, sectionName, srcPath } from '../../state/data';
import './SpectechnikaPage.scss';


const SpectechnikaPage = {
  render: async () => {
    const view = `
      <div class="spectechnikaPage">
        <h2>${sectionName[currentKeyName.currentKeyName]}</h2>
        <br/><br/>
        <img src="${srcPath[currentKeyName.currentKeyName]}" alt="" class="spectechImage"/>
        <br/><br/>
        <p class="spectechnikaPagePreis"></p>
        <p class="spectechnikaDeskription">${description[currentKeyName.currentKeyName]}</p>
        <a href="#/">StartPage</a>
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
