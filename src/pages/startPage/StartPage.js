import { currentKeyName, prices } from '../../state/data';
import { changeUrl } from '../../state/functions';
import './StartPage.scss';

const StartPage = {
  render: async () => {
    const view = `
    <div class="anchorDiv" id="specteh">
      <h2>Аренда спецтехники</h2>
    </div>
    <div class="spectehnika">
    <div class="ekskovatorpogrUpperDiv" data-keyname="ekskovatorpogr">
      <p class="techName">Экскаватор- погрузчик</p>     
      <img src="./assets/img/ekskovatorpogr.png" alt="" />     
      <p class="chitdalP">Читать далее</p>
    </div>
    <div class="samosvalUpperDiv" data-keyname="samosval">
      <p class="techName">Самосвал</p>     
      <img src="./assets/img/samosval.jpg" alt="" />      
      <p class="chitdalP">Читать далее</p>
    </div>
    <div class="bulldozerUpperDiv" data-keyname="bulldozer">   
      <p class="techName">Бульдозер</p>     
      <img src="./assets/img/bulldozer.png" alt="" />     
      <p class="chitdalP">Читать далее</p>
    </div>
    <div class="frontalUpperDiv" data-keyname="frontal">  
      <p class="techName">Фронтальный погрузчик</p>    
      <img src="./assets/img/frontal.jpg" alt="" />    
      <p class="chitdalP">Читать далее</p>
    </div>
    <div class="ekskavatorUpperDiv" data-keyname="ekskavator"> 
      <p class="techName">Экскаватор</p>      
      <img src="./assets/img/ekskavator.jpg" alt="" />     
      <p class="chitdalP">Читать далее</p>
    </div>
    <div class="avtokranUpperDiv" data-keyname="avtokran">    
      <p class="techName">Автокран</p>     
      <img src="./assets/img/avtokran.jpg" alt="" />     
      <p class="chitdalP">Читать далее</p>
    </div>
    <div class="manipulatorUpperDiv" data-keyname="manipulator">    
      <p class="techName">Манипулятор</p>    
      <img src="./assets/img/manipulator.jpg" alt="" />     
      <p class="chitdalP">Читать далее</p>
    </div>
    <div class="jamoburUpperDiv" data-keyname="jamobur">
      <p class="techName">Ямобур</p>     
      <img src="./assets/img/jamobur.png" alt="" />     
      <p class="chitdalP">Читать далее</p>
    </div>
  </div>
  <div class="anchorDiv" id="uslug">
    <h2>Наши услуги</h2>
  </div>
  <div class="uslugi">
    <div data-keyname="planirovka">
      <p class="techName">Планировка участка</p>
      <img src="./assets/img/planirovka.jpg" alt="" />
      <p class="chitdalP">Читать далее</p>  
    </div>
    <div data-keyname="uborka">
      <p class="techName">Уборка и вывоз снега</p>
      <img src="./assets/img/uborka.jpg" alt="" />
      <p class="chitdalP">Читать далее</p>
    </div>
    <div data-keyname="demontazh">
      <p class="techName">Демонтаж строений</p>
      <img src="./assets/img/demontazh.jpg" alt="" />
      <p class="chitdalP">Читать далее</p>
    </div>
    <div data-keyname="kopka">
      <p class="techName">Копка котлованов и траншей</p>
      <img src="./assets/img/kopka.jpg" alt="" />
      <p class="chitdalP">Читать далее</p>
    </div>
  </div>
      
    `;
    return view;
  },

  
  after_render: () => {
    
    const header = document.querySelector('header');
    const descriptionSection = document.querySelector('.description');
    header.style.display = 'block';
    descriptionSection.style.display = 'block';
    //here we get all prices from innerHTML of divs from the prices section and put them into prices object

    //later with setValue method

    const allPriceSpans = document.querySelectorAll('.changecolor');
    console.log('allPriceSpans--',allPriceSpans);
    allPriceSpans.forEach((elem) => {
      prices.setKey = elem.getAttribute("data-key");
      prices.setValue = Number(elem.innerHTML);
    })

    const toTheTopButton = document.querySelector('#toTheTopButton');
    toTheTopButton.addEventListener( 'click', getToTheTop );
    function getToTheTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    console.log('prices obj--', prices);  

    //here we add eventlisteners (with delegation) to all our technik divs

    const spectehnikaDiv = document.querySelector('.spectehnika');
    spectehnikaDiv.addEventListener('click', (event) => {
      addEvlist(event);
      changeUrl('#spectehnika');
    });


    //here we add eventlisteners (with delegation) to all our uslugi divs

    const uslugiDiv = document.querySelector('.uslugi');
    uslugiDiv.addEventListener('click', (event) => {
      addEvlist(event);
      changeUrl('#spectehnika');
    });


    //addEventListener to "arenda spectehniki" and "nashi uslugi" links
    function addEvlist (event) { console.log('gggggggggggggg');
    header.style.display = 'none';
    descriptionSection.style.display = 'none';
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
      
    }

  },
};

export default StartPage;
