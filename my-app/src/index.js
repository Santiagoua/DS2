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
    
});