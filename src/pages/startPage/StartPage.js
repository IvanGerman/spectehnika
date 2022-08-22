import './StartPage.scss';

const StartPage = {
  render: async () => {
    const view = `
      <div class="start-page-div">
        <h2>StartPage</h2>
        <p>StartPage paragraph</p>
      </div>
      
    `;
    return view;
  },
  
  after_render: () => {
    console.log('startPage after_render');  
  },
};

export default StartPage;
