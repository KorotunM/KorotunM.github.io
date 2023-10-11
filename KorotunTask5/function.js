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
