(function($) {
  function securityAudits() {
    var $btn = $('.request-audit-btn');
    var validForm = false;
    var classPathToDetach = null;
    var emailData = {
      email: 'audits@openzeppelin.com',
      subject: 'Security Audit',
    };

    var mapRef = {
      project_name: 'Project Name',
      project_website: 'Project Website',
      project_name: 'Contact Name',
      contact_name: 'Project Name',
      email: 'Contact email',
      project_scope: 'Short description of audit scope',
      project_repository: 'Link to repository',
      project_audit_scope:
        'Estimated total lines of code including inline comments',
      project_launch_date: 'Target launch day',
      project_documentation: 'Documentation',
      project_comments: 'Other comments',
      project_date_finalization: 'Estimated date for finalization',
      project_estimated_audit_scope: 'Estimated audit scope',
    };

    // Validators Map - Validates given an input type
    var validate = {
      email: (email) => /^.+@.+\..+$/.test(email),
      text: (t) => true,
      textarea: (t) => true,
    };

    function closeModalContainer(e) {
      var container = $('#security-audit-form .modal-sr');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        setModal(false);
      }
    }

    var serialize = function(inputs) {
      var serialized = [];
      var serializedArrMap = [];
      var serializedBody = [];

      for (var i = 0; i < inputs.length; i++) {
        var field = inputs[i];
        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (
          !field.name ||
          field.disabled ||
          field.type === 'file' ||
          field.type === 'reset' ||
          field.type === 'submit' ||
          field.type === 'button'
        )
          continue;

        serializedArrMap.push({
          name: field.name,
          required: field.required,
          value: field.value,
        });

        serialized.push(
          encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
        );

        serializedBody.push(mapRef[field.name] + ' ' + field.value);
      }

      return {
        str: serialized.join('&'),
        mapArr: serializedArrMap,
        body: serializedBody.join('\n'),
      };
    };

    function checkValues() {
      if (classPathToDetach) {
        var $submitBtn = $('.sr-form').find('.btn[type="submit"]');
        var inputClass =
          '.sr-form .msr-form-field__input:not(.msr-form-field__input--path-' +
          classPathToDetach +
          ')';
        var inputs = $(inputClass);
        var res = serialize(inputs);
        emailData.body = res.body;
        // To be valid all required must be completed
        validForm = res.mapArr.filter((i) => i.value === '' && i.required);
        if (validForm.length === 0) {
          // Enable form submit
          $submitBtn.attr('disabled', false);
        } else {
          $submitBtn.attr('disabled', true);
        }
      }
    }

    function blurInput() {
      checkValues();
      var $input = this;

      if (!$input || $input.type === 'button') {
        return false;
      }

      var $formField = $(this).parent();
      $formField.addClass('msr-form-field--touched');
      if (!$input.value) {
        addErrorInline($formField);
      } else if (!validate[$input.type]($input.value)) {
        addErrorInline($formField);
      } else {
        removeErrorInline($formField);
        checkValues();
      }
    }

    function addErrorInline(el) {
      if (!el.find('.error').length) {
        var $error = document.createElement('span');
        $error.setAttribute('class', 'error');
        $error.innerHTML = '<i class="material-icons error-icon">warning</i>';
        $(el).append($error);
      }
    }

    function removeErrorInline(el) {
      $(el)
        .find('.error')
        .remove();
    }

    function showSuccess() {
      $('.modal-sr .view-2').removeClass('hidden');
      $('.modal-sr').addClass('modal-sr--sm');
    }

    function modalFunc() {
      var $cont = $('#security-request .sr-form');
      var $aY = $('#action-yes');
      var $aN = $('#action-no');

      $aY.click(function() {
        $cont.find('.msr-form-path--yes').removeClass('hidden');
        $cont.find('.msr-form-path--no').addClass('hidden');
        $aN.removeClass('btn--active');
        $(this).addClass('btn--active');
        classPathToDetach = 'no';
      });

      $aN.click(function() {
        $cont.find('.msr-form-path--no').removeClass('hidden');
        $cont.find('.msr-form-path--yes').addClass('hidden');
        $aY.removeClass('btn--active');
        $(this).addClass('btn--active');
        classPathToDetach = 'yes';
      });

      // Cheking changes on blur
      $('.sr-form .msr-form-field .msr-form-field__input').on(
        'blur',
        blurInput
      );

      // Catch enter
      $('.sr-form .msr-form-field .msr-form-field__input').keydown(function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if (key == 13) {
          e.preventDefault();
          var inputs = $(this)
            .closest('form')
            .find(':input:visible');
          inputs.eq(inputs.index(this) + 1).focus();
        }
      });

      // Submiting the form
      $('.sr-form').on('submit', function(e) {
        $('.modal-sr .modal-sr__sub-container').remove();
        showSuccess();
      });
    }

    function openModalContainer() {
      // Loading functionality
      modalFunc();
      setModal();
    }

    function setModal(value = true) {
      if (!value) {
        $('#security-audit-form').removeClass('active');
        $('html').removeClass('overlay-visible');
        $('body .overlay').removeClass('overlay--active');
        $('.modal-sr').removeClass('active');
        return;
      }

      $('#security-audit-form').addClass('active');
      $('html').addClass('overlay-visible');
      $('body .overlay').addClass('overlay--active');
      $('.modal-sr').addClass('active');
    }

    return (function() {
      $('.close-action').click(function(e) {
        $('#security-audit-form').removeClass('active');
        $('html').removeClass('overlay-visible');
        $('body .overlay').removeClass('overlay--active');
        $('.modal-sr').removeClass('active');
      });

      $btn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModalContainer();
      });

      // Click Outside
      $(document).mouseup(function(e) {
        closeModalContainer(e);
      });
    })();
  }

  function init() {
    securityAudits();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
