function calcularPromedio() {
    const calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    const calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    const calificacion3 = parseFloat(document.getElementById('calificacion3').value);
    const calificacion4 = parseFloat(document.getElementById('calificacion4').value);
  
  
    const promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4 ) / 4;
  
    let resultado = '';
    if (promedio > 61) {
      resultado = `Aprobado. Promedio: ${promedio.toFixed(2)}`;
    } else {
      resultado = `Reprobado. Promedio: ${promedio.toFixed(2)}`;
    }
  
    document.getElementById('resultado').innerText = resultado;
  }
  
