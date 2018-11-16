$(function () {
  var bodyClassType = $('body').attr('class');
  var form_validation = function (form_id, action) {
    var valid = wq_form.form.validation({
      form_id: form_id,
      valid_action: action,
      ignore: 'hidden'
    });
    if (!valid) {
      if ($('.wq-input.error,.wq-select.error').length > 0) {
        $('html, body').animate({ scrollTop: $('.wq-input.error,.wq-select.error').eq(0).offset().top - $('#MENU_BTN').height() * 2 - (bodyClassType == 'MOBILE' ? ($(".TOPHOME02").height()) : 0) }, 300);
      }
    }
  };

  $('.checkGo_free').click(function (e) {
    e.preventDefault();
    var action = this.href;
    var val = parseInt($('#_iYear').val(), 10);
    if (val >= 2014) {
      (new wqPopup()).alert('您好，本流年服務未提供2014~2019年出生者批算，敬請見諒！');
    } else {
      form_validation('form', action);
    }
    var val = $('#_NickName').val();
    var ret = (val == '') ? false : true;
    if (ret == false) {
      $('#_NickName').addClass('error');
      $(window).scrollTop($('#_NickName').offset().top - $('#MENU_BTN').height() * 2 - (bodyClassType == 'MOBILE' ? ($(".TOPHOME02").height()) : 0));
    }

  });


  wq_form.form.addCustomInput({
    name: '感情現況',
    elem: $('#_emotion_type'),
    validation: {
      check: function () {
        var val = parseInt($('#_emotion_type').val(), 10);
        var vm = $("#_emotion_type").parent().parent();
        var ret = ([8, 9, 11].indexOf(val) === -1) ? false : true ;
        if (ret === false && vm.css('display')=='block') {
          $('#_emotion_type').addClass('error');
          //$(window).scrollTop($('#_emotion_type').offset().top - $('#MENU_BTN').height() * 2 - (bodyClassType == 'MOBILE' ? ($(".TOPHOME02").height()) : 0));
        }
        return ret;
      },
      error: '',

    }
  });

  wq_form.form.addCustomInput({
    name: '子息現況',
    elem: $('#_child_type'),
    validation: {
      check: function () {
        var val = parseInt($('#_child_type').val(), 10);
        var ret = ([0, 1].indexOf(val) === -1) ? false : true;
        if (ret === false) {
          $('#_child_type').addClass('error');
          //$(window).scrollTop($('#_child_type').offset().top - $('#MENU_BTN').height() * 2 - (bodyClassType == 'MOBILE' ? ($(".TOPHOME02").height()) : 0));
        }
        return ret;

      },
      error: ''
    }
  });

  wq_form.form.addCustomInput({
    name: '事業現況',
    elem: $('#_career_type'),
    validation: {
      check: function () {
        if( this.elem.id == ''){
          console.log("bad");
          ret = '' ;

        }else{
        var val = parseInt($('#_career_type').val(), 10);
        var ret = ([2, 3, 4, 5, 6, 8].indexOf(val) === -1) ? false : true;
        if (ret === false) {
          $('#_career_type').addClass('error');
          //$(window).scrollTop($('#_career_type').offset().top - $('#MENU_BTN').height() * 2 - (bodyClassType == 'MOBILE' ? ($(".TOPHOME02").height()) : 0));
        }
          console.log('food')
        }

        return ret;
      },
      error: ''
    }
  });


  $('#_emotion_type, #_child_type, #_career_type, #_NickName').click(function () {
    $(this).removeClass('error');
  });

  $('form').bind("keypress", function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });
})
