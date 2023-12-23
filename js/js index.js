let sidemeu = document.getElementById("sideMenu");
function openMenu() {
    sidemeu.style.top = "0";
}
function closeMenu() {
    sidemeu.style.top = "-400px";
}

function rightImg() {
    const nextElement = document.getElementById("india-map")
    nextElement.src = "./images/dal-lake-2.jpg";
}

function leftImg() {
    const nextElement = document.getElementById("india-map")
    nextElement.src = "./images/dal-lake-5.jpg";
}