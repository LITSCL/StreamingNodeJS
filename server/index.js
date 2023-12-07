const socket = require('socket.io');

var app = require('./app.js'); //En esta constante se almacena toda la configuración del servidor.

var puerto = 2900;

var server = app.listen(puerto, function() { //Aquí se levanta el servidor en el puerto 2900.
    console.log(`Servidor levantado correctamente en el puerto ${puerto}`);
});

var io = socket(server);

io.on("connection", function(socket) {
    socket.on("stream", (imagen) => { //Aquí se recibe la imagen de quien esta realizando el streaming.
        socket.broadcast.emit("stream", imagen); //Aquí se transmiten las imagenes a los clientes.
    });
});