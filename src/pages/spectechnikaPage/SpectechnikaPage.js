//import { SamosvalLogicClass } from "../../components/uslugiComponents/UslugiLogicClass";
import { currentKeyName, description, prices, sectionName, srcPath } from '../../state/data';
import { changeUrl } from '../../state/functions';
import './SpectechnikaPage.scss';


const SpectechnikaPage = {
  render: async () => {
    document.documentElement.scrollTop = document.body.scrollTop = 18;
    const view = `
      <div class="spectechnikaPage">
        <h2>${sectionName[currentKeyName.currentKeyName]}</h2>
        <p class="spectechnikaDeskription">${description[currentKeyName.currentKeyName]}</p>
        <p class="spectechnikaPagePreisP">От <span class="spectechnikaPagePreis">2500</span> рублей/час</p>
        <div class="navlinksWrapper">
          <div class="spectechImage">
            <img src="${srcPath[currentKeyName.currentKeyName]}" alt=""/>
          </div>
          <div class="navlinks" >
            <p class="navlinksP">Спецтехника:</p>
            <p href="#/" class="navP" data-keyname="ekskovatorpogr">Экскаватор- погрузчик</p>
            <p href="#/" class="navP" data-keyname="samosval">Самосвал</p>
            <p href="#/" class="navP" data-keyname="bulldozer">Бульдозер</p>
            <p href="#/" class="navP" data-keyname="frontal">Фронтальный погрузчик</p>
            <p href="#/" class="navP" data-keyname="ekskavator">Экскаватор</p>
            <p href="#/" class="navP" data-keyname="avtokran">Автокран</p>
            <p href="#/" class="navP" data-keyname="manipulator">Манипулятор</p>
            <p href="#/" class="navP" data-keyname="jamobur">Ямобур</p>
            <p class="navlinksP navlinksP2">Услуги:</p>
            <p href="#/" class="navP" data-keyname="planirovka">Планировка участка</p>
            <p href="#/" class="navP" data-keyname="uborka">Уборка и вывоз снега</p>
            <p href="#/" class="navP" data-keyname="demontazh">Демонтаж строений</p>
            <p href="#/" class="navP" data-keyname="kopka">Копка котлованов и траншей</p>
          </div>
          <div class="telWrapper">
            <p>+7 (3822) 577-522</p>
            <p>8-964-091-62-11 (бухгалтер)</p>
            <p class="emailP">tk.nord@mail.ru</p>
           </div>
        </div>  
        <a href="#/" class="backBtnA"><div class="backBtn">
          <img src="./assets/img/backBtn.png" alt="" class="backBtnImage" />
        </div></a>
      </div>
    `;
    return view;
  },
  after_render: async () => {
    //new SamosvalLogicClass ();
    
    const spectechnikaPagePreis = document.querySelector('.spectechnikaPagePreis');
    // prices.setKey = currentKeyName.currentKeyName;
    // prices.setValue = 
    spectechnikaPagePreis.innerHTML = prices[currentKeyName.currentKeyName] ;

    //delegation
    const navlinksDiv = document.querySelector('.navlinks');
    navlinksDiv.addEventListener('click', (event) => {

      if (event.target.className === 'navP') {
        let keyName = event.target.getAttribute("data-keyname");
        currentKeyName.setCurrentKeyName = keyName;
        
        changeUrl('#/');
        changeUrl('#spectehnika');
         return
      };
    });
  },
};

export default SpectechnikaPage;

