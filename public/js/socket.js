let socket = io();
    
//conexion con el servidor
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Servidor desconectado');
});

//enviar datos al servidor
socket.emit('recibirMensaje', {
    user: 'Laura',
    message: 'aaaaa'
}, function(resp){
    console.log(resp);
});

//recibir datos del servidor
socket.on('enviarMensaje', function(res) {
    console.log(res);
});