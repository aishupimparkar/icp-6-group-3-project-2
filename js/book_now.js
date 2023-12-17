let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");

}
function closePopup(){
    popup.classList.remove("open-popup");

}


function increment(){

    const quantityElement = document. getElementById("quantity");
    const quantity = parseInt(quqntityElement.innerText);
    quantityElement.innerText = quantity + 1;
}

function decrement(){

    const quantityElement = document. getElementById("quantity");
    const quantity = parseInt(quqntityElement.innerText);
    quantityElement.innerText = quantity - 1;
}