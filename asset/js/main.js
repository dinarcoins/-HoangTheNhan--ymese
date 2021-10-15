$(document).ready(function () {
	$("#seclecbox")
		.change(function () {
			$(this)
				.find("option:selected")
				.each(function () {
					var optionValue = $(this).attr("value");
					if (optionValue) {
						$(".ticket_content")
							.not("." + optionValue)
							.hide();
						$("." + optionValue).show();
					} else {
						$(".ticket_content").hide();
					}
				});
		})
		.change();
});
