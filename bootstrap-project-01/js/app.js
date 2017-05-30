"use strict";
$(document).ready(function(){
	$(".gear-ckeck").click(function(){
		$(".color-option").toggle();
	});
	
	var colorOption = $("color-option ul li");
	colorOption
		.eq(0).css("backgroundColor", "#E41B17").end()
		.eq(1).css("backgroundColor", "#E426D5").end()
		.eq(2).css("backgroundColor", "#009AFF").end()
		.eq(3).css("backgroundColor", "#FFD500");
});