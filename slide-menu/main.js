$(document).ready(function() {
	var viewport = $("#viewport");
	$(".sidebar-toggle").bind("click", function(e) {
		e.preventDefault();
		viewport.toggleClass("open");
	});
});
