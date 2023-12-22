function submitForm() {
    alert('Booking successful!');
}

let quantity = document.getElementById("quantity");
function quantityDecrease() {
    alert('hello');
    let quantityDec = parseInt(quantity.innerText);
    quantity.innerText = --quantityDec;
}
function quantityIncrease() {
    let quantityInc = parseInt(quantity.innerText);
    quantity.innerText = ++quantityInc;
}