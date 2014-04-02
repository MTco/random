(function($) {
	$.fn.ajaxify = function() {
		return this.each(function() {
			Ajaxify(this);
		});
	}
})(jQuery);

function Ajaxify(elem) {
	elem = $(elem);
	
	var target = elem.data("target");
	if (target == null) {
		// Ignore elements without targets.
		return;
	}
	
	var pushState = false;
	if (elem.data("pushstate") !== "undefined") {
		pushState = true;
	}
	
	var event, url;
	
	var data = elem.serialize();
	var type = "get";
	
	switch (elem.prop("tagName")) {
	case "A":
		event = "click";
		url = elem.attr("href");
		break;
	
	case "FORM":
		event = "submit";
		url = elem.attr("action");
		if (elem.attr("method") == "post") {
			type = "post";
		}
		break;
	
	default:
		// Ignore wrong element types.
		return;
	}
	
	elem.on(event, function() {
		$.ajax(url, {
			data: data,
			success: handleResponse,
			type: type
		});
		
		// Prevent default behaviour from happening.
		return false;
	});
	
	function handleResponse(html) {
		if (pushState && history.pushState) {
			history.pushState(
				null,
				null,
				url
			);
		}
		
		$(target).html(
			html
		);
	}
}
