import { UslugiLogicClass } from "../../components/uslugiComponents/UslugiLogicClass";
import './UslugiPage.scss';


const UslugiPage = {
  render: async () => {
    const view = `
      <div class="uslugiPage">
        <h2>UslugiPage</h2>
        <br/><br/>
        <p>uslugi paragraph</p>
        <a href="/">StartPage</a>
      </div>
    `;
    return view;
  },
  after_render: async () => {
    new UslugiLogicClass ();
  },
};

export default UslugiPage;
