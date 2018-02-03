$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items: 3,
        animateOut: 'fadeOut',
		autoHeight:true,
		loop: true,
        responsive:{
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1100 : {
            items: 3
        }
    }
	});
});
menu.onclick = function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav")  {
        x.className += " responsive"
    }
    else{
        x.className = "topnav";
    }
}