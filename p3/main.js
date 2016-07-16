function marcar(numero){

	var numero_marcado = parseInt(numero);
	if(numero_marcado = 5515985495){
		miTelefono = new Tel(numero_marcado);
		console.log(miTelefono.marca + " " + miTelefono.color);
		miTelefono.contador+=1;
	}

}

function Tel(numero){
	this.marca = 'SAMSUNG';
	this.color = 'AZUL';
	this.numero = numero;
	this.contador = 0;
	
}

