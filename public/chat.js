//Make connection
var socket = io.connect('http://localhost:4000');

//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var output = document.getElementById('output');
var btn = document.getElementById('send');
var feedback = document.getElementById('feedback');

//Emit events
btn.addEventListener('click', function(){
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);
});

//Listen for events
socket.on('chat', function(data){
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
  feedback.innerHTML += '<p><em>' + data + ' is typing...</p>';
});
