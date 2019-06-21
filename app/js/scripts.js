$(document).ready(function() {
  //Form submit
  	var form = $('#ajax-contact');
  	var formMessages = $('#form-messages');

  	// Set up an event listener for the contact form.
  	$('button').click(function(event) {
  		event.preventDefault();
  		var formData = $(form).serialize();

  		// Submit the form using AJAX.
  		$.ajax({
  			type: 'POST',
  			url: $(form).attr('action'),
  			data: formData
  		})
  		.done(function(response) {
  			$(formMessages).text(response);
  			$('#name, #email, #message').val('');

        $('#form-messages').addClass('success');
        $('#form-messages').removeClass('error');
  		})
  		.fail(function(data) {
        $('#form-messages').addClass('error');
        $('#form-messages').removeClass('success');
  			if (data.responseText !== '') {
  				$(formMessages).text(data.responseText);
  			} else {
  				$(formMessages).text('Oops! An error occured and your message could not be sent.');
  			}
  		});
  	});

});
