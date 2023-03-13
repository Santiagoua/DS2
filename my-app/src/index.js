const btn_fondo = document.getElementById('button-color');
const btn_letra = document.getElementById('button-color-letra');
const vlan = document.getElementById('vlan');

btn_fondo.addEventListener('click', function onClick(event) {
    const backgroundColor = document.body.style.backgroundColor;
    if(backgroundColor==="white"){
        document.body.style.backgroundColor = 'black'
    }else{
        document.body.style.backgroundColor = 'white'
    }
  });


btn_letra.addEventListener('click', function onClick(event) {
    const backgroundColor = document.getElementById('letrero').style.color;
    if(backgroundColor==="green"){
        document.getElementById('letrero').style.color = 'blue'
    }else{
        document.getElementById('letrero').style.color = 'green'
    }
});

vlan.addEventListener('click', function onClick(event) {
    const status= document.getElementById("vlan-txt").style.display;
    if(status==="none"){
        document.getElementById("vlan-txt").style.display="block"
    }else{
        document.getElementById("vlan-txt").style.display="none"
    }
    const express = require('express');
const app = express();


// Ruta para la página principal
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Inicio de sesión</title>
      </head>
      <body>
        <h1>Iniciar sesión</h1>
        <form action="/login" method="POST">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email">
          <br><br>
          <label for="password">Contraseña:</label>
          <input type="password" name="password" id="password">
          <br><br>
          <button type="submit">Iniciar sesión</button>
        </form>
      </body>
    </html>
  `);
});


// Ruta para la página de bienvenida
app.get('/welcome', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bienvenido</title>
      </head>
      <body>
        <h1>Bienvenido</h1>
        <p>Has iniciado sesión exitosamente</p>
      </body>
    </html>
  `);
}); 
    
});