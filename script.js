var balls = jQuery('.balls img');
var saludo = jQuery('.balls h1');
var lpqtp = jQuery ('.balls h2');
var velocidad = jQuery('#velocidad');
var variacion = jQuery('#variacion');
var start = jQuery('#start');

function var1( ){
  balls.css("animation-name", "light1" );
  saludo.css("animation-name", "light1" );
  lpqtp.css("animation-name", "mostrar1" );
}
function var2() {
  balls.css("animation-name", "light2");
  saludo.css("animation-name", "light2");
  lpqtp.css("animation-name", "mostrar1" );
  var velLocal = parseFloat( velocidad[0].value ) / 2
  for ( var i = 0; i < balls.length; i++ ){
    balls[i].style.animationDelay = velLocal + "s";
    saludo[i].style.animationDelay = velLocal + "s";
    lpqtp[i].style.animationDelay = velLocal + "s";
    velLocal = velLocal + parseFloat( velocidad[0].value / 2 )
  }
}
function var3() {
  balls.css("animation-name", "light3");
  saludo.css("animation-name", "light3");
  lpqtp.css("animation-name", "mostrar1" );
  var velLocal = parseFloat(velocidad[0].value) / 4
  for (var i = 0; i < balls.length; i++) {
    balls[i].style.animationDelay = velLocal + "s";
    saludo[i].style.animationDelay = velLocal + "s";
    lpqtp[i].style.animationDelay = velLocal + "s";
    velLocal = velLocal + parseFloat(velocidad[0].value / 4)
  }
}

start.click( function () {
  balls.css({"animation-duration": velocidad.val( ) + "s" , "animation-name": "light1" })
  saludo.css({"animation-duration": velocidad.val( ) + "s" , "animation-name": "light1" })
  lpqtp.css({"animation-duration": velocidad.val( ) + "s" , "animation-name": "mostrar1" })
})

velocidad.change( function(){
  balls.css("animation-duration", velocidad.val() + "s" );
  saludo.css("animation-duration", velocidad.val() + "s" );
} )

variacion.change( function(){
  if ( this.value == "1" ){
    var1();
  }else if( this.value == "2"){
    var2();
  }else if( this.value == "3"){
    var3();
  }
})
