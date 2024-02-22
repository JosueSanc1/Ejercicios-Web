let pizzaCount = 0;
const pizzaCountElement = document.getElementById("pizzaCount");

function incrementarCantidad() {
  pizzaCount++;

  pizzaCountElement.textContent = pizzaCount;
  

}

let meltscount=0;
const meltscountElement = document.getElementById("meltscount");

function incrementarCantidadmelts(){
    meltscount++;
    meltscountElement.textContent = meltscount;
}

let pastacount=0;
const pastacountElement = document.getElementById("pastacount");

function incrementarCantidadpasta(){
    pastacount++
    pastacountElement.textContent = pastacount;
}

let pizzagrandecount=0;
const pizzagrandecountElement = document.getElementById("pizzagrandecount");
function incrementarCantidadpizza(){
    pizzagrandecount++
    pizzagrandecountElement.textContent= pizzagrandecount;
}

let quesocount=0;
const quesocountElement = document.getElementById("quesocount");

function incrementarCantidadqueso(){
    quesocount++
    quesocountElement.textContent = quesocount;
}