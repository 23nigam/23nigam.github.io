$(function() {
    $(".terminal-output").empty();

    var typed = new Typed("#auto-typing-homepage", {
	  strings: ["Drop me an email on hello@nigamshah.dev or head over to the shell to make things a bit more exicting"],
	  typeSpeed : 50
	});

	$('.typed-cursor').hide();
});