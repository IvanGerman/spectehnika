//import { SamosvalLogicClass } from "../../components/uslugiComponents/UslugiLogicClass";
import { currentKeyName, prices } from '../../state/data';
import './spectechnikaPage.scss';


const SpectechnikaPage = {
  render: async () => {
    const view = `
      <div class="spectechnikaPage">
        <h2>SpectechnikaPage</h2>
        <br/><br/>
        <p class="spectechnikaPagePreis"></p>
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
