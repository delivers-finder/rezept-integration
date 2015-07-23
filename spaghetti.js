$( document ).ready(function() {

  $('.shop-login-form').hide()
  $('.account-register-inputs').hide()
  $('.account-login-inputs').hide()

  $('#my_popup').popup(
    {
      type: 'overlay',
      transition: 'all 0.3s',
      closetransitionend : function() {
        $('.shop-login-form').hide()
        $('.receipe').show()
      },
      opentransitionend: function() {
        evaluateCheckboxes();
      }
    }
  );

  $('#tooltip').popup(
    {
      type: 'overlay',
      openelement :'.tooltip_open',
      closeelement :'.tooltip_close',
      focuselement : '#tooltip',
      autozindex : true,
      // vertical : 'bottom',
      // horizontal: 'leftedge'
    }
  );

  $('#tooltip2').popup(
    {
      type: 'overlay',
      transition: 'all 0.3s',
      openelement :'.tooltip2_open',
      closeelement :'.tooltip2_close',
      focuselement : '#tooltip2',
      autozindex : true,
      // color: '#fff',
      // horizontal: 'left'
    }
  );

  $('.transfer').click(function(){
    $('.receipe').hide()
    $('.shop-login-form').show()
  })


  $( "#needs-account" ).click(function(){
    $('.account-login-inputs').hide()
    $('.account-register-inputs').show()
  })

  $( "#has-account" ).click(function(){
    $('.account-login-inputs').show()
    $('.account-register-inputs').hide()
  })

  function evaluateCheckboxes() {
    $('td:nth-child(2)').children().each(function(){
      if (!($(this).is(":checked"))) {
        $(this).parent().nextAll().css('opacity', '0.5')
      } else {
        $(this).parent().nextAll().css('opacity', '1.0')
      }
    })
  }

  $('input').click(function(){
    evaluateCheckboxes();
  });

});