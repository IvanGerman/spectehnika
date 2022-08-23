import StartPage from './pages/startPage/StartPage';
import SamosvalPage from './pages/spectechnikaPage/SpectechnikaPage';
import UslugiPage from './pages/uslugiPage/UslugiPage';
import Utils from './utils/Utils';

const routes = {
  '/': StartPage ,
  '/uslugi': UslugiPage ,
  '/spectehnika': SamosvalPage ,
};

const router = async () => {

  const content = document.getElementById('root');

  const request = Utils.parseRequestURL();
  const parsedURL = request.resource ? `/${request.resource}` : '/';

  const page = routes[parsedURL];

  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
