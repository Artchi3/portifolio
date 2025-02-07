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
          <h2>Me chame de <b>Artchi3</b><p>WEB_DEV</p></h2>
        </div>
      </section>
      <section class="aboutme">
          <div class="aboutme-txt">
              <h3>Quem Sou Eu?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat fringilla mi, vel condimentum libero rutrum eu. Pellentesque maximus sapien ut facilisis pulvinar. Vivamus vulputate finibus elementum. Sed sed lacus pretium, tempus felis ac, rutrum sem. Morbi a sapien elementum lorem mattis convallis a nec nisl. Vestibulum quis lorem viverra elit dignissim viverra fermentum vitae odio. Donec sollicitudin tincidunt viverra. Sed vestibulum accumsan sem et consectetur. Aliquam ultricies dignissim laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet lacinia elit et aliquam. Quisque ultrices, lacus quis tempus porttitor, metus ante facilisis leo, ac commodo nunc odio non diam. Nam sed ex felis. Nulla facilisi. Aenean eget pellentesque arcu. Donec semper eros nec ipsum ultricies aliquet.</p>    
              <label for="">'Lorem ipsum dolor sit amet consectetur, adipisicing elit...'<b>- FULANO DE TAL</b></label>
          </div>
          <ul class="aboutme-images">
            <li class="images img1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8QfWf1dVIl8fJcdaygt30RU8lpkHLYmlEA&s" alt=""/></li>
            <li class="images img2"><img src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt=""/></li>
            <li class="images img3"><img src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=" alt=""/></li>
          </ul>
      </section>
      <section class="projects">
          <img class="costeladeadao" src="/COSTELA.png" alt=""/> 
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
