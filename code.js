document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    validarNumeroControl();
  });
  
  document.querySelector('.resgitrar').addEventListener('click', function (event) {
    event.preventDefault();
    validarformulario();
  });
  
  function validarNumeroControl() {
    // Obtener el número de control del input
    const numeroControl = document.querySelector('[name="ncontrol"]').value;
  
    // Si la longitud es diferente de 8 caracteres
    if (numeroControl.length !== 8) {
      alert("El número debe tener 8 dígitos.");
      return;
    }
  
    // Dividir el número de control en tres partes
    const parte1 = numeroControl.substring(0, 2); // Primeros dos dígitos
    const parte2 = numeroControl.substring(2, 4); // Siguientes dos dígitos
    const parte3 = numeroControl.substring(4, 8); // Últimos cuatro dígitos
  
    // Validar la primera parte (18-24)
    if (parte1 < 18 || parte1 > 24) {
      alert("Los primeros dos dígitos deben estar entre 18 y 24.");
      return;
    }
  
    // Validar la segunda parte (debe ser 84)
    if (parte2 !== "84") {
      alert("Los segundos dos dígitos deben ser 84.");
      return;
    }
  
    // Validar que la tercera parte tenga cuatro dígitos y sea un número
    if (parte3.length !== 4 || isNaN(parte3)) {
      alert(
        "Los últimos cuatro dígitos deben ser un número válido de 4 dígitos."
      );
      return;
    }
  
    // Si pasa todas las validaciones
    alert("Número de control válido.");
    window.location.href = "formulario.html"; // Redirige a otra página si es válido
  }
  
  function validarformulario() {
    const numeroControl = document.querySelector('[name="ncontrol"]').value;
    const apellidoPaterno = document.querySelector('[name="App"]').value;
    const apellidoMaterno = document.querySelector('[name="Apm"]').value;
    const nombre = document.querySelector('[name="nombre"]').value;
    const correo = document.querySelector('[name="correo"]').value;
    const telefono = document.querySelector('[name="telefono"]').value;
    const sexo = document.querySelector('[name="sexo"]:checked');
    const fechaNacimiento = document.querySelector(`[name="Fechan"]`).value;
    const direccion = document.querySelector(`[name="direccion"]`).value;
    const municipio = document.querySelector(`[name="municipio"]`).value;
    const estado = document.querySelector(`[name="estado"]`).value;
    const procedencia = document.querySelector(`[name="procedencia"]`).value;
    const carrera = document.querySelector(`[name="car"]`).value;
    const periodo = document.querySelector(`[name="periodo"]`).value;
  
    // Expresiones regulares para validaciones
    const soloNumeros = /^[0-9]+$/;
    const soloLetras = /^[a-zA-ZÀ-ÿ\s]+$/;
    const formatoCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
    // Validaciones
    if(numeroControl===""){
        alert("El numero de control es obligatorio");
        return;
    }

    if (!soloNumeros.test(numeroControl)) {
      alert("El número de control debe contener solo números.");
      return;
    }
  
    if(apellidoPaterno===""){
        alert("El apellido parterno es obligatorio");
        return;
    }

    if (!soloLetras.test(apellidoPaterno)) {
      alert("El apellido paterno debe contener solo letras.");
      return;
    }
  
    if(apellidoMaterno===""){
        alert("el apellido materno es obligatorio");
        return;
    }

    if (!soloLetras.test(apellidoMaterno)) {
      alert("El apellido materno debe contener solo letras.");
      return;
    }
  
    if(nombre===""){
        alert("el nombre es obligatorio");
        return;
    }

    if (!soloLetras.test(nombre)) {
      alert("El nombre debe contener solo letras.");
      return;
    }

     if (!sexo) {
      alert("Debe seleccionar un sexo.");
      return;
    }   
    if (fechaNacimiento === "") {
        alert("La fecha de nacimiento es obligatoria.");
        return;
      }

    if(correo===""){
        alert("ingresa un correo por favor");
        return;
    }

    if (!formatoCorreo.test(correo)) {
      alert("Ingresa un correo electrónico válido.");
      return;
    }
  


    if(telefono===""){
        alert("ingresa un numero de telefono");
        return;
    }

    if (!soloNumeros.test(telefono)) {
      alert("El número de teléfono debe contener solo números.");
      return;
    }
    

  
    if (direccion === "") {
      alert("La dirección es obligatoria.");
      return;
    }
  
    if (municipio === "" || !soloLetras.test(municipio)) {
      alert("El municipio es obligatorio y debe contener solo letras.");
      return;
    }
  
    if (estado === "" || !soloLetras.test(estado)) {
      alert("El estado es obligatorio.");
      return;
    }
  
    if (procedencia === "") {
      alert("Llena el campo de procedencia.");
      return;
    }
  
    if (carrera === "") {
      alert("Selecciona una carrera.");
      return;
    }
  
    if (periodo === "") {
      alert("Llena el campo de periodo.");
      return;
    }
  
    // Si todas las validaciones son correctas, enviar el formulario
    alert("Registro exitoso");
    
    // Enviar el formulario
    document.querySelector('.form-dos').submit();
  }
  