function incriment(planet, ok) {
    const planetValue = document.getElementById(planet)
    let elem = parseInt(planetValue.value);
    if (planetValue.value == "") {
        planetValue.value = 1;
    }
    else {
        elem++
        planetValue.value = elem;
    }
    if (ok == "mars-cost") {
        const totalMars = elem * 5000;
        const marsCost = document.getElementById('mars-cost');
        marsCost.innerText = totalMars;
    }
    if (ok == "moon-cost") {
        const totalMoon = elem * 3000;
        const moonCost = document.getElementById("moon-cost");
        moonCost.innerText = totalMoon;
    }
    total()
}
function dicrement(planet, ok) {
    const planetValue = document.getElementById(planet);
    let lee = parseInt(planetValue.value);
    if (planetValue.value == "") {
        planetValue.value = 0;
    }
    else if (planetValue.value <= 0) {
        planetValue.value = 0;
    }
    else {
        lee--
        planetValue.value = lee;
    }
    if (ok == "mars-cost") {
        const totalMars = lee * 5000;
        const marsCost = document.getElementById('mars-cost');
        marsCost.innerText = totalMars;
    }
    if (ok == "moon-cost") {
        const totalMoon = lee * 3000;
        const moonCost = document.getElementById("moon-cost");
        moonCost.innerText = totalMoon;
    }
    total()
}

function total() {
    const marsCost = document.getElementById('mars-cost').innerText;
    let marsTotal = parseInt(marsCost);

    const moonCost = document.getElementById('moon-cost').innerText;
    let moonTotal = parseInt(moonCost);

    const totalCost = marsTotal + moonTotal;
    const total = document.getElementById('total-cost');
    total.innerText = totalCost;
}