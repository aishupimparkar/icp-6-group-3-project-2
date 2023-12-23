let sidemeu = document.getElementById("sideMenu");
function openMenu() {
    sidemeu.style.top = "0";
}
function closeMenu() {
    sidemeu.style.top = "-400px";
}

function submitForm() {
    alert('Booking successful!');
}

let quantity = document.getElementById("quantity");
function quantityDecrease() {
    let quantityDec = parseInt(quantity.innerText);
    quantity.innerText = --quantityDec;
}
function quantityIncrease() {
    let quantityInc = parseInt(quantity.innerText);
    quantity.innerText = ++quantityInc;
}