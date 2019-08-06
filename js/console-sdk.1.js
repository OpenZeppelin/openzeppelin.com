function createElement(type = 'span', str, parent) {
  var el = document.createElement(type);
  el.innerHTML = str;
  $('.type-wrap').append(el);
  return el;
}

function type(text, typespeed = 1000) {
  var el = createElement('span', '', '.type-wrap');
  $(el).typed({
    strings: ['<span style="color:#BDBADB">&nbsp' + text + '</span>'],
    typespeed: typespeed,
    backDelay: 0,
    loop: false,
    contentType: 'html',
    loopCount: false,
  });
}

function prompt({ elem, delay, cb = () => { } }) {
  setTimeout(function () {
    createElement.apply(null, elem);
    cb();
  }, delay);
}
var commands = [
  {
    delay: 500,
    elem: [
      'div',
      '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Compiled contracts with solc 0.5.9 </br> (commit.e560f70d)</span>',
      '.type-wrap',
    ],
  },
  {
    delay: 600,
    elem: [
      'span',
      '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a contract to instantiate</span>',
      '.type-wrap',
    ],
    cb: function () {
      type('<span style="color:#4de4e3">Counter</span></br>');
    },
  },
  {
    delay: 800,
    elem: [
      'span',
      '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network</span>',
      '.type-wrap',
    ],
    cb: function () {
      type('<span style="color:#4de4e3">development</span>');
    },
  },
  {
    delay: 1000,
    elem: [
      'div',
      '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Added contract Counter</span>',
      '.type-wrap',
    ],
  },
];

function f2() {
  $('.terminal .typed-cursor').css('color', 'black');
  commands.forEach(prompt);

  //       setTimeout(function() {
  //         createElement(
  //           'div',
  //           '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Added contract Counter</span>',
  //           '.type-wrap'
  //         );
  //         setTimeout(function() {
  //           createElement(
  //             'div',
  //             '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Contract Counter deployed</span>',
  //             '.type-wrap'
  //           );
  //           setTimeout(function() {
  //             createElement(
  //               'div',
  //               '<strong>All contracts have been deployed</strong>',
  //               '.type-wrap'
  //             );
  //             setTimeout(function() {
  //               createElement(
  //                 'span',
  //                 '<span class="tc-green">?</span>&nbsp;<span class="tc-strong">Do you want to call a function on </br> the instance after creating it?</span>',
  //                 '.type-wrap'
  //               );
  //               setTimeout(function() {
  //                 type('<span style="color:#BDBADB">No</span>', function f4() {
  //                   createElement(
  //                     'div',
  //                     '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Setting everything up to </br> create contract instances</span>',
  //                     '.type-wrap'
  //                   );
  //                   createElement(
  //                     'div',
  //                     '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Instance created at </br>0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
  //                     '.type-wrap'
  //                   );
  //                 });
  //               }, 1000);
  //             }, 800);
  //           }, 800);
  //         }, 400);
  //       }, 900);
  //     });
  //   });
  // }, 500);
}

(function ($) {
  type('$ openzeppelin create', f2());
})(jQuery);
