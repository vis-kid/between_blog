jQuery(document).ready(function($) {
	var pipes = $('.list-keywords');
  pipes.highlight('||');
	var highlight_span = $('.highlight');
	highlight_span.hide().fadeIn(2000);
});
