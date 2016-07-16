var suma = 0;
var almingreso = 0;
do{
	var ingreso = prompt("Ingresa un numero");
	console.log(ingreso);
	if(!isNaN(ingreso)){

		
		suma= parseInt(ingreso) + almingreso;
		console.log(suma);
		almingreso = suma;

	}
} while (ingreso != "fin");
	console.log(suma);