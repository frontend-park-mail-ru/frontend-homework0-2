	$('document').ready(function() {
  $('#button').on('click', function() {
    $('input[required]').addClass('req');
	let obj = document.getElementById('password');
	if (obj) {
		
		let warning = document.getElementById('warning');
		if (warning) {
			
			if (obj.value.trim().length < 1) { 
			warning.style.display = "block"; 
		}
		
		}
	}
  });
});