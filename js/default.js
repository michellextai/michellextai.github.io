$(document).ready(function() {
    $(".navigation").load("./nav.html");
    $(".works").load("./works.html");
    $(".footer").load("./footer.html");
    $(".scrollspy").scrollSpy();
    $(".parallax").parallax();
    
    window.sr = ScrollReveal();

    sr.reveal(".works", {
        origin: "bottom",
        distance: "20px",
        duration: 1500,
        delay: 0,
        scale: 1,
        easing: "ease"
    });
    
    sr.reveal(".reveal", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 0,
        scale: 1,
        easing: "ease"
    });

    
    
//
//  $(function(){
//      $("#hh").typed({
//        strings: ["Hi^300, I'm Helen Hong.^1000"],
//        typeSpeed:30,
//        delay:500,
//      });
//  });    
    
//	$(function(){
//		$("#typed").typed({
//			strings: ["Hello^300, I am Michelle Tai.^1000 I'm a user experience designer keen on making interactions frictionless."],
//			typeSpeed: 300
//		});
//	});
////    
//
//	document.addEventListener("DOMContentLoaded", function(){
//		Typed.new("#typed", {
//			stringsElement: document.getElementById("typed-strings")
//		});
//	});
    
});