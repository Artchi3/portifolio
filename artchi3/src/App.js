import logo from './logo.svg';
import './build/app.css';
import Header from './models/Header.js';
import Footer from './models/Footer.js';
import Timeline from './models/Timeline.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section class="greetings">
        <div>
          <h1>Olá Mundo</h1>
          <h2>Me chame de <b>Artchi3</b>, <p>Desenvolvedor Front-End</p></h2>
        </div>
      </section>
      <section class="aboutme">
          <div class="aboutme-txt">
              <h3>Quem Sou Eu?</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem magnam deleniti et voluptates. Dignissimos quod, commodi dolores nisi sapiente impedit porro nemo quos ducimus. Exercitationem error sapiente omnis at facilis.</p>    
          </div>
          <div class="aboutme-images">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8QfWf1dVIl8fJcdaygt30RU8lpkHLYmlEA&s" alt=""/>
              <img src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt=""/>
              <img src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=" alt=""/>
          </div>
      </section>
      <section class="projects">
          <img src="costeladeadao" alt=""/> 
          <Timeline></Timeline>
      </section>
      <section class="socials">
          <div class="moreofme">
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a>
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a>
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a> 
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a>
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a>
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a> 

          </div>
          <div class="contactme">
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a>
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a>
              <a href="">
                  <img src="" alt=""/>
                  @Artchi3
              </a> 
          </div>
      </section> 
      <Footer></Footer>
    </div>
  );
}

export default App;
