function createElement(type = 'span', str, parent) {
  var el = document.createElement(type);
  el.innerHTML = str;
  $('.type-wrap').append(el);
  return el;
}

function type(text, cb = () => { }, opts = {}) {
  var el = createElement('span', '', '.type-wrap');
  $(el).typed({
    strings: ['<span style="color:white">' + text + '</span>'],
    loop: false,
    contentType: 'html',
    loopCount: false,
    callback: function () {
      setTimeout(function () {
        cb();
      }, 500);
    },
    showCursor: false,
    typeSpeed: opts.typespeed | 0,
    backSpeed: 50,
    backDelay: 500,
    loop: false,
  });
}

var lines = [
  'Quick Start',
  'Run your local blockchain:',
  '<span class="tc-green">></span> ganache-cli --secure -u 0 -u 1 -u 2 </br>--deterministic',
  'Initialize the OpenZeppelin Starter-Kits Project:',
  '<span class="tc-green">></span> openzeppelin init starter-kit',
  'Go to the client directory:',
  '<span class="tc-green">></span> cd client',
  'Run the React app:',
  '<span class="tc-green">></span> npm run start',
  'Continue in your browser!',
];

function f2(done) {
  createElement(
    'span',
    '<span class="tc-gray">mac:dev$&nbsp;</span>',
    '.type-wrap'
  );
  type('mkdir my-dapp </br>', function () {
    createElement(
      'span',
      '<span class="tc-gray">mac:dev$&nbsp;</span>',
      '.type-wrap'
    );
    type('cd my-dapp</br>', function () {
      createElement(
        'span',
        '<span class="tc-gray">mac:dev$&nbsp;</span>',
        '.type-wrap'
      );
      type('openzeppelin unpack starter-kit', function () {
        createElement(
          'div',
          '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Kit downloaded and unpacked</span>',
          '.type-wrap'
        );
        setTimeout(function () {
          createElement(
            'div',
            '<span><The kit is ready to use.</span>',
            '.type-wrap'
          );
          setTimeout(function () {
            lines.forEach(function (l) {
              createElement('div', l, '.type-wrap');
            });
            setTimeout(function () {
              done();
            }, 1500);
          });
        }, 1000);
      });
    });
  });
}

function f3(done) {
  createElement(
    'span',
    '<span class="tc-gray">mac:dev$&nbsp;</span>',
    '.type-wrap'
  );
  type('openzeppelin init starter-kit </br>', function () {
    createElement(
      'span',
      '<span class="tc-green">?</span>&nbsp;<span class="tc-strong">Initial project version&nbsp;</span>',
      '.type-wrap'
    );
    setTimeout(function () {
      type('v1', function () {
        createElement(
          'div',
          'Project initialized. Write a new contract in the </br> contracts folder and run openzeppelin create to deploy it. </br>',
          '.type-wrap'
        );

        setTimeout(function () {
          createElement(
            'span',
            '<span class="tc-gray">mac:dev$&nbsp;</span>',
            '.type-wrap'
          );
          type('npm run start', function () {
            setTimeout(function () {
              done();
            }, 500);
          });
        }, 500);
      });
    }, 500);
  });
}

function f4(done) {
  var lines = [
    '<span class="tc-green">Compiled successfully!</span></br></br>',
    'You can now view <span class="tc-strong">client</span> in the browser.',
    '<span class="tc-strong">Local:</span>            http://localhost:3000/',
    '<span class="tc-strong">On Your Network:</span>  http://10.0.0.175:3000/</br></br>',
    'Note that the development build is not optimized.',
    'To create a production build, use npm run build.',
  ];

  setTimeout(function () {
    lines.forEach(function (l) {
      createElement('div', l, '.type-wrap');
    });
    setTimeout(function () {
      $('#terminal').removeClass('terminal-center');
      $('.p-animated').addClass('expanded');
      $('#terminal').addClass('terminal-left');
      $('#terminal2').removeClass('terminal-center');
      $('#terminal2').addClass('terminal-right');
      done();
    }, 1000);
  }, 500);
}

(function ($) {
  f2(function () {
    $('.type-wrap').empty();
    f3(function () {
      $('.type-wrap').empty();
      f4(function () {
        console.log('Animation Finished');
      });
    });
  });
})(jQuery);
