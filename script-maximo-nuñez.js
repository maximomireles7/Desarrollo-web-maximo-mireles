function enviarDatos() {
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;

    localStorage.setItem('edad', edad);
    localStorage.setItem('sexo', sexo);
    localStorage.setItem('educacion', educacion);
    localStorage.setItem('ocupacion', ocupacion);

    window.location.href = 'resultado-maximo-nuñez.html';
}
