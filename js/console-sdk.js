var wrap = $('.wrap');
var typeWrap = $('.type-wrap');
var isRunning = true;

function createElement(type = 'span', props, str, parent) {
  var attrs = ['class', 'id'];
  var parent = parent || typeWrap;
  var el = document.createElement(type);

  if (props && 'object' === typeof props) {
    Object.keys(props).forEach((p) => {
      // Adding attributes
      if (attrs.includes(p)) {
        el.setAttribute(p, props[p]);
      }
    });
  }

  el.innerHTML = str;

  if (parent) {
    $(parent).append(el);
  }

  return el;
}

function type(parent, text, cb = () => { }, opts = {}) {
  var el = createElement('span', null, '', parent);
  $(el).typed({
    strings: ['<span style="color:white">' + text + '</span>'],
    loop: false,
    contentType: 'html',
    loopCount: false,
    onComplete: cb(),
    showCursor: false,
    typeSpeed: opts.typespeed | 0,
    backSpeed: 0,
    backDelay: 1000,
    loop: false,
  });
}

function setActive(id) {
  console.log('active', id);
  $('.term__menu .term__menu-list__item#item-' + id).addClass('active');
  $('.term__menu .term__menu-list__item:not(#item-' + id + ')').removeClass(
    'active'
  );
}

function f2(el, done) {
  setActive('f2');
  type(el, '$ openzeppelin create');
  $('.typed-cursor').css('color', 'black');
  setTimeout(function () {
    setTimeout(function () {
      createElement(
        'div',
        null,
        '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Compiled contracts with solc 0.5.9 </br> (commit.e560f70d)</span>',
        el
      );
    }, 500);
    setTimeout(function () {
      createElement(
        'span',
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a contract to instantiate&nbsp;</span>',
        el
      );
      type(el, '<span style="color:#4de4e3">Counter</span></br>', function () {
        setTimeout(function () {
          createElement(
            'span',
            null,
            '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
            el
          );
          type(
            el,
            '<span style="color:#4de4e3">development</span>',
            function () {
              setTimeout(function () {
                createElement(
                  'div',
                  null,
                  '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Added contract Counter</span>',
                  el
                );
                setTimeout(function () {
                  createElement(
                    'div',
                    null,
                    '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Contract Counter deployed</span>',
                    el
                  );
                  setTimeout(function () {
                    createElement(
                      'div',
                      null,
                      '<span class="tc-strong">All contracts have been deployed</span>',
                      el
                    );
                    setTimeout(function () {
                      createElement(
                        'span',
                        null,
                        '<span class="tc-green">?</span>&nbsp;<span class="tc-strong">Do you want to call a function on </br> the instance after creating it?&nbsp;</span>',
                        el
                      );
                      setTimeout(function () {
                        type(
                          el,
                          '<span style="color: white">No</span>',
                          function f4() {
                            setTimeout(function () {
                              createElement(
                                'div',
                                null,
                                '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Setting everything up to </br> create contract instances</span>',
                                el
                              );
                              setTimeout(function () {
                                createElement(
                                  'div',
                                  null,
                                  '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Instance created at </br>0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
                                  el
                                );
                                done();
                              }, 500);
                            }, 500);
                          }
                        );
                      }, 1400);
                    }, 1300);
                  }, 1200);
                }, 1000);
              }, 900);
            }
          );
        }, 1200);
      });
    }, 1000);
  }, 1000);
}

function f3(el, done) {
  setActive('f3');
  type(el, '$ openzeppelin send-tx</br>');
  setTimeout(function () {
    setTimeout(function () {
      createElement(
        'span',
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
        el
      );
      type(
        el,
        '<span style="color:#4de4e3">development</span></br>',
        function () {
          setTimeout(function () {
            createElement(
              'span',
              null,
              '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick an instance&nbsp;</span>',
              el
            );
            type(
              el,
              '<span style="color:#4de4e3">Counter at</span>',
              function () {
                setTimeout(function () {
                  createElement(
                    'div',
                    null,
                    '<span style="color:#4de4e3">0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
                    el
                  );
                }, 800);
                setTimeout(function () {
                  createElement(
                    'div',
                    null,
                    '<span style="color:#87cc37">?</span>&nbsp;<span class="strong">Select which function</span>',
                    el
                  );
                  type(
                    el,
                    '<span style="color:#4de4e3">increase()</span></br>',
                    function () {
                      setTimeout(function () {
                        createElement(
                          'span',
                          null,
                          '<span style="color:#87cc37">✓</span>&nbsp;<span class="strong">Transaction successful. Transaction hash: </br> 0xd203b6e16f3b6e4922bb19251bd3b90958a7d14c1e</br>1a133631b934e20820d04</span>',
                          el
                        );
                        done();
                      }, 1500);
                    }
                  );
                }, 1500);
              }
            );
          }, 800);
        }
      );
    }, 700);
  }, 1000);
}

function f4(el, done) {
  setActive('f4');
  type(el, '$ openzeppelin call</br>');
  setTimeout(function () {
    setTimeout(function () {
      createElement(
        'span',
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
        el
      );
      type(
        el,
        '<span style="color:#4de4e3">development</span></br>',
        function () {
          setTimeout(function () {
            createElement(
              'span',
              null,
              '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick an instance&nbsp;</span>',
              el
            );
            type(
              el,
              '<span style="color:#4de4e3">Counter at</span>',
              function () {
                setTimeout(function () {
                  createElement(
                    'div',
                    null,
                    '<span style="color:#4de4e3">0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
                    el
                  );
                }, 800);
                setTimeout(function () {
                  createElement(
                    'div',
                    null,
                    '<span style="color:#87cc37">?</span>&nbsp;<span class="strong">Select which function</span>',
                    el
                  );
                  type(
                    el,
                    '<span style="color:#4de4e3">value()</span></br>',
                    function () {
                      setTimeout(function () {
                        createElement(
                          'span',
                          null,
                          '<span style="color:#87cc37">✓</span>&nbsp;<span class="strong">Method \'value()\' returned: 1</span>',
                          el
                        );
                        done();
                      }, 500);
                    }
                  );
                }, 1500);
              }
            );
          }, 800);
        }
      );
    }, 700);
  }, 1000);
}

function f5(el, done) {
  setActive('f5');
  type(el, '$ openzeppelin upgrade</br>');
  $('.typed-cursor').css('color', 'black');
  setTimeout(function () {
    setTimeout(function () {
      createElement(
        'span',
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
        el
      );
      type(el, '<span style="color:#4de4e3">development</span>', function () {
        setTimeout(function () {
          createElement(
            'div',
            null,
            '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Compiled contracts with solc 0.5.9 </br> (commit.e560f70d)</span>',
            el
          );
          createElement(
            'div',
            null,
            '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Contract Counter deployed</span>',
            el
          );
          setTimeout(function () {
            createElement(
              'div',
              null,
              '<span class="tc-strong">All contracts have been deployed</span>',
              el
            );
            setTimeout(function () {
              createElement(
                'span',
                null,
                '<span class="tc-green">?</span>&nbsp;<span class="tc-strong">Which instances would you like to upgrade?&nbsp;</span></br>',
                el
              );
              setTimeout(function () {
                type(
                  el,
                  '<span style="color: white">All instances</span>',
                  function () {
                    setTimeout(function () {
                      setTimeout(function () {
                        createElement(
                          'div',
                          null,
                          '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Instance upgraded at </br>0xCfEB869F69431e42cdB54A4F4f105C19C080A601.</br> Transaction receipt: </br>0x56363451719e42a4dab366f450c4130387aa3413.</span>',
                          el
                        );
                        done();
                      }, 500);
                    }, 500);
                  }
                );
              }, 1400);
            }, 1200);
          }, 1000);
        }, 900);
      });
    }, 1000);
  }, 1000);
}

var animations = {
  f2: f2,
  f3: f3,
  f4: f4,
  f5: f5,
};

(function ($) {
  function initAnimation() {
    f2(typeWrap, function () {
      setTimeout(function () {
        typeWrap.empty();
        f3(typeWrap, function () {
          setTimeout(function () {
            typeWrap.empty();
            f4(typeWrap, function () {
              setTimeout(function () {
                typeWrap.empty();
                f5(typeWrap, function () {
                  console.log('Animation done');
                });
              }, 2100);
            });
          }, 2100);
        });
      }, 2000);
    });
  }

  function init() {
    $('.term__menu-list__link').click(function () {
      isRunning = false;
      $('.term__menu-list__link').removeClass('term__menu-list__link--active');
      $(this).addClass('term__menu-list__link--active');
      var animname = $(this).data('anim-name');
      // Killing node
      wrap.empty();
      // Recreating wrap type container
      var key = Math.floor(Math.random() * Math.floor(1000000));

      typeWrap = createElement(
        'div',
        { class: 'type-wrap', id: key },
        '',
        wrap
      );
      var animname = $(this).data('anim-name');
      animations[animname](typeWrap, function () {
        console.log('Anim Once - Done');
      });
    });
  }

  init();
  initAnimation();
})(jQuery);
