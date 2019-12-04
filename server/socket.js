const { io } = require('./server');

io.on('connection', (client) => {

    //conexion con el cliente
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //recibir mensaje del cliente
    client.on('recibirMensaje', (req, callback) =>{

        //enviar el mensaje del cliente a todos los otros clientes
        client.broadcast.emit('enviarMensaje', req);


        // if(req.user){
        //     callback({
        //         ok: true
        //     });
        // }
        // else{
        //     callback({
        //         ok: false
        //     });
        // }
    });

    //enviar mensaje al cliente
    client.emit('enviarMensaje', {
        message: 'Bienvenido'
    });
});