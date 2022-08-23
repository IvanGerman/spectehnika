import { currentKeyName, prices } from '../../state/data';
import { changeUrl } from '../../state/functions';
import './StartPage.scss';

const StartPage = {
  render: async () => {
    const view = `
    <div class="spectehnika" id="specteh">
    <div class="ekskovatorpogrUpperDiv" data-keyname="ekskovatorpogr">
      Экскаватор- погрузчик
    </div>
    <div class="samosvalUpperDiv" data-keyname="samosval">
      <p>Самосвал</p>
      <br/><br/>
      <img src="../../assets/img/samosval.jpg" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div data-keyname="bulldozer">
      Бульдозер
    </div>
    <div>
      Фронтальный погрузчик
    </div>
    <div>
      Экскаватор
    </div>
    <div>
      Автокран
    </div>
    <div>
      Манипулятор
    </div>
    <div>
      Ямобур
    </div>
  </div>
  <div class="uslugi" id="uslug">
    <div>Планировка участка</div>
    <div>Копка котлованов и траншей</div>
    <div>Демонтаж строений</div>
    <div>Уборка и вывоз снега</div>
  </div>
      
    `;
    return view;
  },
  
  after_render: () => {
    
    //here we get all prices from innerHTML of divs from the prices section and put them into prices object

    const samosvalPreis = document.querySelector('.samosvalPreis');
    //later with setValue method
    prices.setSamosvalPreis = Number(samosvalPreis.innerHTML);
    const ekskovatorpogrPreis = document.querySelector('.ekskovatorpogrPreis');
    prices.setEkskovatorpogrPreis = Number(ekskovatorpogrPreis.innerHTML);
    const bulldozerPreis = document.querySelector('.bulldozerPreis');
    prices.setBulldozerPreis = Number(bulldozerPreis.innerHTML);

    console.log('prices obj--', prices);  

    //here we add eventlisteners (later with delegation) to all our technik divs
    const samosvalUpperDiv = document.querySelector('.samosvalUpperDiv');
    const ekskovatorpogrUpperDiv = document.querySelector('.ekskovatorpogrUpperDiv');

    samosvalUpperDiv.addEventListener('click', (event) => {
      let keyName = event.currentTarget.getAttribute("data-keyname");
      currentKeyName.setCurrentKeyName = keyName;
      changeUrl('#spectehnika');
    });

    ekskovatorpogrUpperDiv.addEventListener('click', (event) => {
      let keyName = event.currentTarget.getAttribute("data-keyname");
      currentKeyName.setCurrentKeyName = keyName;
      changeUrl('#spectehnika');
    });

  },
};

export default StartPage;
