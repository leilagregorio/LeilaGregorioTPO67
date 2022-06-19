window.addEventListener('load', ()=> {

    const form=document.querySelector('#formulario')
    const Nom=document.querySelector('#nombre')
    const Email=document.querySelector('#email') //html realiza una validacion basica(que cntenga un @ y algo a continuacion)
    const Tel=document.querySelector('#telefono')
    const msj=document.querySelector('#mensaje')

    form.addEventListener('submit', (e) => {
       e.preventDefault(); //haca que el boton no envie nada si no esta todo ok
       validaCampos(); //validamos
   });
   
   const validaCampos =()=> {
       //capturar los valores ingresados por el usuario
       const nombreValor = Nom.value.trim() //la funcion trim() elimina todos los espacios en blanco en los extremos
       const emailValor = Email.value.trim()
       const telValor = Tel.value
       //valido nombre
       if(!nombreValor){
            validaFalla(Nom,"Campo vacío")
        }else{
           validaOk(Nom);
         }
        //valido telefono
       if(!telValor){
           validaFalla(Tel, "campo vacio")
       }else if(!validaTel){
           validaFalla(Tel, "Telefono no valido") 
       }else {
           validaOk(Tel)
           }
       //valido email
       if(!emailValor){
        validaFalla(Email,"campo vacio")
       }else if(!validaEmail(emailValor)){
           validaFalla(Email,"Email no valido")
       }else{
           validaOk(Email)
           }
    }
   const validaFalla = (input, msje) => {
       const FControl = input.parentElement //devuelve al elemento padre del elemento input q mandamos por parametro
       const aviso = FControl.querySelector('p') 
       aviso.innerText = msje;
   
       FControl.className='form-control falla' //crea una clase la cual voy a trabajarla  ante una falla con css
   }
   const validaOk = (input) => {
       const FControl = input.parentElement
       FControl.className = 'form-control ok'
   }
   const validaTel =(numero)=>{
      // return /^(?:((?P<p1>(?:\( ?)?+)(?:\+|00)?(54)(?<p2>(?: ?\))?+)(?P<sep>(?:[-.]| (?:[-.] )?)?+)(?:(?&p1)(9)(?&p2)(?&sep))?|(?&p1)(0)(?&p2)(?&sep))?+(?&p1)(11|([23]\d{2}(\d)??|(?(-10)(?(-5)(?!)|[68]\d{2})|(?!))))(?&p2)(?&sep)(?(-5)|(?&p1)(15)(?&p2)(?&sep))?(?:([3-6])(?&sep)|([12789]))(\d(?(-5)|\d(?(-6)|\d)))(?&sep)(\d{4})|(1\d{2}|911))$/.test(numero);
   }
   const validaEmail = (input) =>{
       return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input);
   }
   var listaMsj=[];
   const guardarLocal=(pNombre,pEmail,pTelefono,pMensaje)=>{
       var nuevoMensaje={
               nombre:pNombre,
               telefono:pTelefono,
               email:pEmail,
               mensaje:pMensaje
           };
       listaMsj.push(nuevoMensaje);
       }
   
  
   const saveMsj= () => {
    const valornom = Nom.value.trim() 
    const valoremail = Email.value
    const valortel = Tel.value
    const valormsj=  msj.value
           guardarLocal(valornom,valoremail,valortel,valormsj);
       }
    document.querySelector('#btn').addEventListener('click', saveMsj);
    console.log(saveMsj);
    });