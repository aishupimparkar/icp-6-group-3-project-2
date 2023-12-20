function submitForm() {
    alert('Booking successful!');
}

function quantityIncrease() {
    const quantity = document.getElementById("quantity");
    let quantityInc = parseInt(quantity.innerText);

    quantity.innerText = ++quantityInc;
}
function quantityDecrease() {
    const quantity = document.getElementById("quantity");
    let quantityDec = parseInt(quantity.innerText);

    quantity.innerText = --quantityDec;
}
