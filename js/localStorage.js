window.addEventListener('load', ()=> {

const form=document.querySelector('#formulario')
 const Nom=document.querySelector('#nombre')
 const Ap=document.querySelector('#apellido')
 const Ed=document.querySelector('#edad')
 const Tel=document.querySelector('#telefono')
 const Sms=document.querySelector('#mensaje')

 form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
})

const validaCampos = ()=> {
    //capturar los valores ingresados por el usuario
    const nombreValor = Nom.value.trim()
    const apelValor = Ap.value.trim()
    const edValor = Ed.value.trim()
    const telValor = Tel.value.trim();
    const smsValor=Sms.value.trim();
   
    //valida nombre y apellido
    if(!nombreValor){
        validaFalla(Nom, 'Campo vacío')
    }else{
        validaOk(Nom)
    }
    if(!apelValor){
        validaFalla(Ap, 'Campo vacío')
    }else{
        validaOk(Ap)
    }

    
     //validando campo edad +18
     if(edValor<=18){
         validaFalla(Ed,"Debe ser mayor de 18")
     }else{
        validaOk(Ed)
     }
     //validando telefono
     if(telValor.length!=10){
         validaFalla(Tel, "Deben ser 10 digitos")
     }
     else{
         validaOk(Tel)
     }

 }
const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
}
var listaMsj=[]
function guardarLocal(pNombre,pApellido,pEdad,pTelefono,pMensaje){

 var nuevoMensaje={
        nombre:pNombre,
        apellido:pApellido,
        edad:pEdad,
        telefono:pTelefono,
        mensaje:pMensaje
    };
listaMsj.push(nuevoMensaje);
};
function saveMsj(){
    var sNo=document.querySelector('#nombre').value
    var sAp=document.querySelector('#apellido').value
    var sEd=document.querySelector('#edad').value
    var sTe=document.querySelector('#telefono').value
    var sMsj=document.querySelector('#mensaje').value
    guardarLocal(sNo,sAp,sEd,sTe,sMsj);
};

document.querySelector('#btn').addEventListener('click', saveMsj);

})
