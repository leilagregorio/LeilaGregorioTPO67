var formulario=document.getElementById('formulario')[0],
    elementos=formulario.elements,
    boton=document.getElementsByName('btn');
//no funciona,probar con vue
if(typeof(Storage)!== "undefined"){
    localStorage.setItem("Nombre", JSON.stringify.formulario.nombre);
    localStorage.setItem("Apellido", this.apellido);
    localStorage.setItem("Edad",formulario.edad);
    localStorage.setItem("Cliente",formulario.radio.value);
    localStorage.setItem("Servicio",formulario.service.value);
    document.getElementById("resultado").innerHTML=localStorage.getItem("Nombre");
    document.getElementById("resultado").innerHTML=localStorage.getItem("Apellido");
    document.getElementById("resultado").innerHTML=localStorage.getItem("Edad");
    document.getElementById("resultado").innerHTML=localStorage.getItem("Cliente");
    document.getElementById("resultado").innerHTML=localStorage.getItem("Servicio");

   }

   new app