//import { SamosvalLogicClass } from "../../components/uslugiComponents/UslugiLogicClass";
import { data } from '../../state/data';
import './SamosvalPage.scss';


const SamosvalPage = {
  render: async () => {
    const view = `
      <div class="samosvalPage">
        <h2>SamosvalPage</h2>
        <br/><br/>
        <p class="samosvalPagePreis"></p>
        <a href="#/">StartPage</a>
      </div>
    `;
    return view;
  },
  after_render: async () => {
    //new SamosvalLogicClass ();
    
    const samosvalPagePreis = document.querySelector('.samosvalPagePreis');
    samosvalPagePreis.innerHTML = data.samosvalPreis;
  },
};

export default SamosvalPage;
