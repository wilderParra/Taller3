jQuery(document).ready(function(){
	ir();
})

function ir(){
	jQuery(".circulo").animate({
		'marginLeft':'80%',},1000,'swing',regresar)
}
function regresar(){
	jQuery(".circulo").animate({
		'marginLeft':'0%',},1000,'swing',ir)
}
