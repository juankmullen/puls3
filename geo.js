var geo=navigator.geolocation;


var opciones={}

function geo_error()
{ console.log("ERROR");
}

function geo_exito(posicion)
{

  console.log(posicion);

}


geo.getCurrentPosition(geo_exito,geo_error,opciones);
