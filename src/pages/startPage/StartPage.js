import { currentKeyName, prices } from '../../state/data';
import { changeUrl } from '../../state/functions';
import './StartPage.scss';

const StartPage = {
  render: async () => {
    const view = `
    <div class="spectehnika" id="specteh">
    <div class="ekskovatorpogrUpperDiv spectehnikaInnerDiv" data-keyname="ekskovatorpogr">
      <p>Экскаватор- погрузчик</p>
      <br/><br/>
      <img src="../../assets/img/ekskovatorpogr.png" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div class="spectehnikaInnerDiv samosvalUpperDiv" data-keyname="samosval">
      <p>Самосвал</p>
      <br/><br/>
      <img src="../../assets/img/samosval.jpg" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div class="bulldozerUpperDiv spectehnikaInnerDiv" data-keyname="bulldozer">   
      <p>Бульдозер</p>
      <br/><br/>
      <img src="../../assets/img/bulldozer.png" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div>  
      <p>Фронтальный погрузчик</p>
      <br/><br/>
      <img src="../../assets/img/frontal.jpg" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div> 
      <p>Экскаватор</p>
      <br/><br/>
      <img src="../../assets/img/ekskavator.jpg" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div>    
      <p>Автокран</p>
      <br/><br/>
      <img src="../../assets/img/avtokran.jpg" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div>    
      <p>Манипулятор</p>
      <br/><br/>
      <img src="../../assets/img/manipulator.jpg" alt="" />
      <br/><br/>
      <p>Читать далее</p>
    </div>
    <div>
      <p>Ямобур</p>
      <br/><br/>
      <img src="../../assets/img/jamobur.png" alt="" />
      <br/><br/>
      <p>Читать далее</p>
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

    //later with setValue method
    const samosvalPreis = document.querySelector('.samosvalPreis');
    prices.setSamosvalPreis = Number(samosvalPreis.innerHTML);
    const ekskovatorpogrPreis = document.querySelector('.ekskovatorpogrPreis');
    prices.setEkskovatorpogrPreis = Number(ekskovatorpogrPreis.innerHTML);
    const bulldozerPreis = document.querySelector('.bulldozerPreis');
    prices.setBulldozerPreis = Number(bulldozerPreis.innerHTML);
    
    const ekskavatorPreis = document.querySelector('.ekskavatorPreis');
    prices.setEkskavatorPreis = Number(ekskavatorPreis.innerHTML);
    const frontalPreis = document.querySelector('.frontalPreis');
    prices.setFrontalPreis = Number(frontalPreis.innerHTML);
    const avtokranPreis = document.querySelector('.avtokranPreis');
    prices.setAvtokranPreis = Number(avtokranPreis.innerHTML);
    const manipulatorPreis = document.querySelector('.manipulatorPreis');
    prices.setManipulatorPreis = Number(manipulatorPreis.innerHTML);
    const jamoburPreis = document.querySelector('.jamoburPreis');
    prices.setJamoburPreis = Number(jamoburPreis.innerHTML);

    console.log('prices obj--', prices);  

    //here we add eventlisteners (with delegation) to all our technik divs

    const spectehnikaDiv = document.querySelector('.spectehnika');
    spectehnikaDiv.addEventListener('click', (event) => {
      let keyName;
      if (event.target.getAttribute("data-keyname")) {
        console.log(event.target.getAttribute("data-keyname"));
        keyName = event.target.getAttribute("data-keyname");
        currentKeyName.setCurrentKeyName = keyName;
      } else {
        console.log('parentElement',event.target.parentElement.getAttribute("data-keyname"));
        keyName = event.target.parentElement.getAttribute("data-keyname");
        currentKeyName.setCurrentKeyName = keyName;
      }
      changeUrl('#spectehnika');
    })


    // const samosvalUpperDiv = document.querySelector('.samosvalUpperDiv');
    // const ekskovatorpogrUpperDiv = document.querySelector('.ekskovatorpogrUpperDiv');

    // samosvalUpperDiv.addEventListener('click', (event) => {
    //   let keyName = event.currentTarget.getAttribute("data-keyname");
    //   currentKeyName.setCurrentKeyName = keyName;
    //   changeUrl('#spectehnika');
    // });

    // ekskovatorpogrUpperDiv.addEventListener('click', (event) => {
    //   let keyName = event.currentTarget.getAttribute("data-keyname");
    //   currentKeyName.setCurrentKeyName = keyName;
    //   changeUrl('#spectehnika');
    // });

  },
};

export default StartPage;
