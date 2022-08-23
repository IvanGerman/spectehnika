import { data } from '../../state/data';
import './StartPage.scss';

const StartPage = {
  render: async () => {
    const view = `
    <div class="spectehnika" id="specteh">
    <div>
      Экскаватор- погрузчик
    </div>
    <div>
      <a href="#samosval">Самосвал</a>
    </div>
    <div>
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
    console.log('startPage after_render');
    const samosvalPreis = document.querySelector('.samosvalPreis');
    console.log('samosvalPreis--', samosvalPreis.innerHTML);
    data.setSamosvalPreis = Number(samosvalPreis.innerHTML);  
  },
};

export default StartPage;
