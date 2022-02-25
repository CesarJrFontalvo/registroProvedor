let estado=""

let miCheck = document.getElementById('check');


miCheck.addEventListener('click', function() {
  if(miCheck.checked) {
       return estado=true
   
  } else {
    return estado=false
  }
  
});
const boton =()=>{
    if (estado) {
        window.location.href='../Formulario.html'
    } else {
        alert('Para continuar con el proceso de inscripción es necesario autorizar el tratamiento de datos y los términos y condiciones del sitio. ')
    }
}