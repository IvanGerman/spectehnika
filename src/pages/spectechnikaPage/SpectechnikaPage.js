//import { SamosvalLogicClass } from "../../components/uslugiComponents/UslugiLogicClass";
import { currentKeyName, description, prices, sectionName, srcPath } from '../../state/data';
import './SpectechnikaPage.scss';


const SpectechnikaPage = {
  render: async () => {
    document.documentElement.scrollTop = document.body.scrollTop = 950;
    const view = `
      <div class="spectechnikaPage">
        <h2>${sectionName[currentKeyName.currentKeyName]}</h2>
        <div class="navlinksWrapper">
          <div class="telWrapper">
            <p>+7 (3822) 11-11-11</p>
            <p>+7 999-999-99-99</p>
            <p class="emailP">spectehnika@mail.ru</p>
          </div>
          <img src="${srcPath[currentKeyName.currentKeyName]}" alt="" class="spectechImage"/>
          <div class="navlinks" >
            <p class="navlinksP">Спецтехника:</p>
            <p href="#/" class="navP">Экскаватор- погрузчик</p>
            <p href="#/" class="navP">Самосвал</p>
            <p href="#/" class="navP">Бульдозер</p>
            <p href="#/" class="navP">Фронтальный погрузчик</p>
            <p href="#/" class="navP">Экскаватор</p>
            <p href="#/" class="navP">Автокран</p>
            <p href="#/" class="navP">Манипулятор</p>
            <p href="#/" class="navP">Ямобур</p>
            <p class="navlinksP navlinksP2">Услуги:</p>
            <p href="#/" class="navP">Планировка участка</p>
            <p href="#/" class="navP">Уборка и вывоз снега</p>
            <p href="#/" class="navP">Демонтаж строений</p>
            <p href="#/" class="navP">Копка котлованов и траншей</p>
          </div>
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
    spectechnikaPagePreis.innerHTML = prices[currentKeyName.currentKeyName] ;

    //delegation
    const spectehnikaDiv = document.querySelector('.spectehnika');
    spectehnikaDiv.addEventListener('click', (event) => {
      let keyName;
      if (event.target.getAttribute("data-keyname")) {
        console.log(event.target.getAttribute("data-keyname"),event.target);
        keyName = event.target.getAttribute("data-keyname");
        currentKeyName.setCurrentKeyName = keyName;
      } else {
        if (event.target.parentElement.getAttribute("data-keyname") === null) {return};
        console.log('parentElement',event.target.parentElement.getAttribute("data-keyname"));
        keyName = event.target.parentElement.getAttribute("data-keyname");
        currentKeyName.setCurrentKeyName = keyName;
      }
      changeUrl('#spectehnika');
    });
  },
};

export default SpectechnikaPage;

