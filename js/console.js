(function($) {
  setTimeout(function() {
    $('#typed').typed({
      strings: ['[~] $ npm install @openzeppelin/contracts'],
      typespeed: 800,
      backdelay: 0,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        installing();
      },
    });
  }, 1000);
})(jQuery);

function installing() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('installing').innerHTML = '</br> Installing ';
  }, 500);
  setTimeout(function() {
    $('#typed-installing').typed({
      strings: [
        '<span style="color:#BDBADB"> [==^300===^100==^50==^200===] 100%</span>',
      ],
      typespeed: 800,
      backDelay: 0,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        fixedText1and2();
      },
    });
    $('.reset').click(function() {
      $('#typed').typed('reset');
    });
  }, 600);
}

function fixedText1and2() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('fixed-text').innerHTML =
      '</br> + @openzeppelin/contracts</br>';
  }, 200);
  setTimeout(function() {
    $('#typed2').typed({
      strings: ['[~] $ vim ExampleToken.sol^500'],
      typespeed: 800,
      backdelay: 0,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        typeVim();
      },
      resetCallback: function() {
        newTyped();
      },
    });
    $('.reset').click(function() {
      $('#typed').typed('reset');
    });
  }, 900);
}

function typeVim() {
  $('#terminal').removeClass('terminal-center');
  // $('#terminal-section').removeClass('terminal-section');
  // $('#terminal-section').addClass('expanded-terminal-section');
  $('.p-animated').addClass('expanded');
  $('#terminal').addClass('terminal-left');
  $('#terminal2').removeClass('terminal-center');
  $('#terminal2').addClass('terminal-right');
  setTimeout(function() {
    $('#typed-vim').typed({
      strings: [
        [
          '<span style="color: #228B22;">// contracts/ExampleToken.sol</span>',
          '<span style="color: #228B22;">// SPDX-License-Identifier: MIT</span>',
          '<span style="color: #D26696;">pragma</span> solidity <span style="color: #D26696;">^^</span><span style="color: #AF7DFF;">0.7.0</span>;',
          '<div style="height:8px"></div><span style="color: #D26696;">import</span> <span style="color:#F6D8A0;">"@openzeppelin/contracts/token/ERC20/<br><span class="mobile-br">&nbsp;</span>ERC20.sol"</span>;',
          '<div style="height:8px"></div><span style="color: #D26696;">contract</span> <span style="color:#788DD1">ExampleToken</span> is <span style="color:#788DD1">ERC20</span> {',
          '<div style="height:8px"></div><span class="terminal-padding"><span style="color: #788DD1;">constructor</span> ()',
          '<span class="terminal-padding2">ERC20("ExampleToken", "EGT")',
          '<span class="terminal-padding">{</span>',
          '<span class="terminal-padding2">_mint(</span>',
          '<span class="terminal-padding3">msg.sender,</span>',
          '<span class="terminal-padding3">10000 * (10**uint256(decimals()))</span>',
          '<span class="terminal-padding2">);</span>',
          '<span class="terminal-padding">}^500',
          '}',
        ].join('<br>'),
      ],
      typespeed: 800,
      backdelay: 0,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        typeThree();
      },
    });
  }, 900);
}

function typeThree() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    $('#typed3').typed({
      strings: [
        '<br>[~] $ npx truffle compile^500</br>[~] $ npx truffle develop^500</br>> const myToken = await ExampleToken.new()^500</br>> (await myToken.totalSupply()).toString()',
      ],
      typespeed: 800,
      backdelay: 0,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        fixedText3();
      },
    });
  }, 2000);
}

function fixedText3() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('fixed-text3').innerHTML =
      '</br> \'10000000000000000000000\'';
  }, 500);
  setTimeout(function() {
    $('#typed4').typed({
      strings: ['</br>> myToken.transfer(...)'],
      typespeed: 800,
      backdelay: 0,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        fixedText4();
      },
    });
  }, 1000);
}

function fixedText4() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('fixed-text4').innerHTML =
      '</br>true<span style="color: #5FD9F0;">|</span>';
  }, 500);
}
