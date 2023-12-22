function submitForm() {
    alert('Booking successful!');
}

const quantity = document.getElementById("quantity");
function quantityIncrease() {
    let quantityInc = parseInt(quantity.innerText);
    quantity.innerText = ++quantityInc;
}
function quantityDecrease() {
    alert('hello');
    let quantityInc = parseInt(quantity.innerText);
    quantity.innerText = --quantityInc;
}
