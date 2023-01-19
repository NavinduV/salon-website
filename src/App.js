import React from 'react';
import './App.css';
import Hero from './Components/Hero/hero';
import TopBar from './Components/Topbar/topbar';
import Services from './Components/Services/services';
import Cta from './Components/Cta/cta';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import About from './Components/About/about';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/aos/aos.css';
import './assets/css/style.css';

function App() {

  // var loadScript = function(src) {
  //   var tag = document.createElement('script');
  //   tag.async = false;
  //   tag.src = src;
  //   document.getElementsByTagName('body')[0].appendChild(tag);
  // }

  // loadScript('./assets/js/main.js');



  function loadScript(url) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = url;
      script.async = false;
      script.onload = function() {
        resolve(url);
      };
      script.onerror = function() {
        reject(url);
      };
      document.body.appendChild(script);
    });
  }

  let scripts = [
        './assets/vendor/aos/aos.js',
        './assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        './assets/vendor/glightbox/js/glightbox.min.js',
        './assets/vendor/isotope-layout/isotope.pkgd.min.js',
				'./assets/vendor/swiper/swiper-bundle.min.js',
				'./assets/js/main.js'

			];

  // save all Promises as array
  let promises = [];
  scripts.forEach(function(url) {
    promises.push(loadScript(url));
  });

  Promise.all(promises)
  .then(function() {
    console.log('all scripts loaded');
  }).catch(function(script) {
    console.log(script + ' failed to load');
  });

  scripts.forEach(function(url) {
    let script = document.createElement('script');
    script.src = url;
    script.async = false;
    document.body.appendChild(script);
  });

  return (
    <React.Fragment>
      <TopBar/>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Services />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
