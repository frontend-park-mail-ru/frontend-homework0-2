 $('document').ready(function() {
          $('#button').on('click', function() {
            $('input[required]').addClass('req');
          });
         });
         
            const dialog = document.querySelector('.js-dialog')
         
         dialog.showModal()