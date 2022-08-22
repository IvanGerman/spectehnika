import StartPage from './pages/startPage/StartPage';
import SamosvalPage from './pages/technika/SamosvalPage';
import UslugiPage from './pages/uslugiPage/UslugiPage';
import Utils from './utils/Utils';

const routes = {
  //'/': StartPage ,
  '/uslugi': UslugiPage ,
  '/samosval': SamosvalPage ,
};

const router = async () => {
  
  if (!window.location.hash) { return };

  const content = document.getElementById('mainbody');

  const request = Utils.parseRequestURL();
  const parsedURL = request.resource ? `/${request.resource}` : '/';

  const page = routes[parsedURL];

  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
