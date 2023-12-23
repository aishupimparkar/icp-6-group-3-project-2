let sidemeu = document.getElementById("sideMenu");
function openMenu() {
    sidemeu.style.top = "0";
}
function closeMenu() {
    sidemeu.style.top = "-400px";
}


let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}


function headImg(name) {
    const imgElement = document.getElementById("head-img");

    if (name == "maharashtra") {
        imgElement.src = "../images/maha-Templess.jpg";
    }
    else if (name == "tamil-nadu") {
        imgElement.src = "https://tourismtn.com/wp-content/uploads/2021/01/Thanjai.jpg";
    }
    else if (name == "karnataka") {
        imgElement.src = "../images/Virupaksha-Temple.jpg";
    }
    else if (name == "madhya-pradesh") {
        imgElement.src = "../images/Mahakaleshwar-Jyotirlinga.jpg";
    }
    else if (name == "assam") {
        imgElement.src = "../images/assam-temple.jpg";
    }
    else if (name == "uttarakhand") {
        imgElement.src = "../images/Kedarnath-temple.jpg";
    }
    else if (name == "gujarat") {
        imgElement.src = "../images/somnath-temple.jpg";
    }
}



let more = document.getElementById("learnMoreTab");
function openLearnMore() {
    more.style.display = "block";
}
function closeLearnMore() {
    more.style.display = "none";
}
const quantity = document.getElementById("quantity");
function quantityIncrease() {
    let quantityInc = parseInt(quantity.innerText);

    quantity.innerText = ++quantityInc;

}
function changeTajImg(what) {
    const imgTajElement = document.getElementById("changeTajImg");
    what ? (imgTajElement.src = "../images/shirdi-temp.png") : (imgTajElement.src = "https://www.holidify.com/images/bgImages/SHIRDI.jpg");
}