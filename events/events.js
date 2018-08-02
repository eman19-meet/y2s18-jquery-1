// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();
}

$("#moveButton").on("click",function(){
	var x = randomX();
	var y = randomY();
	$("#message").css("left",x);
	$("#message").css("top",y);

})
/* END PROVIDED CODE */

// Write your code below this line :)
