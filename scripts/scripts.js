function scroll_to(div){
    var element = document.getElementById(div);
	$('html, body').animate({
		scrollTop: $(element).offset().top
	},1000);
}


function sendEmail() 
{
    window.location = "mailto:thomasmar1119@gmail.com";
}