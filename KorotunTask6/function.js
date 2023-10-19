window.addEventListener('DOMContentLoaded', function (event)
{
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button");
    b.addEventListener("click", Totali);
})
let option = new Map();
option.set("water1", 120);
option.set("water2", 60);
option.set("water3", 45);
option.set("water4", 38);
option.set("water5", 42);
function Totali() {
    event.preventDefault();
    let button = document.getElementById("reqest").value;
    let m = button.match(/^[0-9]+$/);
    if (m !== null && button > 0)
    {
        let answer = document.getElementById("block").value;
        let rez = "total cost of water: " + option.get(answer) * button;
        document.getElementById("product").innerHTML = rez;
    }
    else 
    {
        alert("Wrong quantity");
    }
}
const KolvoVhod = document.getElementById('count');
const TypeOfServiceInputs = document.querySelectorAll('input[name="serviceType"]');
const OPTIONCONT = document.getElementById('optionContainer');
const SelectedElement = document.getElementById('option');
const PropCont = document.getElementById('propertyContainer');
const ChecboxCont = document.getElementById('property');
const WhollyPriceOfElement = document.getElementById('totalPrice');

function calculatingTheTotalCost() {
    const quantity = parseInt(KolvoVhod.value);
    const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
    let optionPrice = 0;
    let propertyPrice = 0;
    selectedServiceType = document.querySelector('input[name="serviceType"]:checked').value;

  if (selectedServiceType === '50') {
    optionPrice = parseInt(SelectedElement.value);
  }
  else if (selectedServiceType === '100')
  {
    if (ChecboxCont.checked) {
        propertyPrice = 20;
      }
  }
  const totalPrice = quantity * (parseInt(serviceType) + optionPrice + propertyPrice);

  WhollyPriceOfElement.textContent = totalPrice;
}

function handleServiceTypeChange() {
  selectedServiceType = document.querySelector('input[name="serviceType"]:checked').value;

  if (selectedServiceType === '65') {
    OPTIONCONT.style.display = 'none';
    PropCont.style.display = 'none';
  } else if (selectedServiceType === '50') {
    OPTIONCONT.style.display = 'block';
    PropCont.style.display = 'none';
  } else if (selectedServiceType === '100') {
    OPTIONCONT.style.display = 'none';
    PropCont.style.display = 'block';
  }
  calculatingTheTotalCost();
}

KolvoVhod.addEventListener('input', calculatingTheTotalCost);
TypeOfServiceInputs.forEach((input) => {
  input.addEventListener('change', () => {
    calculatingTheTotalCost();
    handleServiceTypeChange();
  });
});
SelectedElement.addEventListener('change', calculatingTheTotalCost);
ChecboxCont.addEventListener('change', calculatingTheTotalCost);