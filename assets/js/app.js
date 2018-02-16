  'use strict';

  var applicationTitle = 'inside out - js';

  var applicationTagline = 'continuously falling foward into the light...';

  window.addEventListener('load', initializeApplication);

  function initializeApplication() {

      document.title = applicationTitle;

      document.body.style.backgroundColor = '#BBB';
      document.body.style.textAlign = 'center';
      document.body.style.fontSize = '3em';

      var elWrapper = document.createElement('div');
      elWrapper.id = 'applicationWrapper';
      document.body.appendChild(elWrapper);

      var elHeader = document.createElement('header');
      elWrapper.appendChild(elHeader);

      var elHeaderTitle = document.createElement('h1');
      elHeaderTitle.innerHTML = applicationTitle;
      elHeader.appendChild(elHeaderTitle);

      var elHeaderTagline = document.createElement('h2');
      elHeaderTagline.textContent = applicationTagline;
      elHeader.appendChild(elHeaderTagline);

      elHeaderTagline.style.fontSize = '0.4em';

      var elMain = document.createElement('main');
      elMain.innerHTML = '<p>Hello World!</p>';
      elWrapper.appendChild(elMain);

      var elFooter = document.createElement('footer');
      elFooter.innerHTML = '<h4>get excited about learning Javascript...';
      elWrapper.appendChild(elFooter);

      elHeader.className = 'animated bounceInDown';
      elHeaderTagline.className = 'animated bounceInLeft';
      elMain.className = 'animated zoomIn';
      elFooter.className = 'animated bounceInRight';
  }
