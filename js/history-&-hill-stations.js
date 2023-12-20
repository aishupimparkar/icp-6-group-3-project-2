let sidemeu = document.getElementById("sideMenu");
function openMenu() {
    sidemeu.style.top = "0";
}
function closeMenu() {
    sidemeu.style.top = "-400px";
}

let next = 1;
function hillStationImg() {
    const imgElement = document.getElementById("hill-station-head-img");
    if (next == 1) {
        imgElement.src = "https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Munnar-Hill-Station-Kerala.jpg";
        ++next;
    }
    else if (next == 2) {
        imgElement.src = "https://www.tourmyindia.com/blog//wp-content/uploads/2022/08/Best-Hill-Stations-to-Explore-in-India.jpg";
    }
}
function hillStationImgBef() {
    const imgElement = document.getElementById("hill-station-head-img");
    if (next == 1) {
        imgElement.src = "https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Darjeeling-Hill-Station.jpg";
        next = 1;
    }
    else if (next == 2) {
        imgElement.src = "https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Munnar-Hill-Station-Kerala.jpg";
        --next;
    }
}


let hist = 1;
function historyImg() {
    const imgElement = document.getElementById("history-head-img");
    if (hist == 1) {
        imgElement.src = "../images/taj-mahal.jpg";
        ++hist;
    }
    else if (hist == 2) {
        imgElement.src = "../images/konark-sun.jpg";
    }
}
function historyImgBef() {
    const imgElement = document.getElementById("history-head-img");
    if (hist == 1) {
        imgElement.src = "../images/safdarjung-tomb.jpg";
        hist = 1;
    }
    else if (hist == 2) {
        imgElement.src = "../images/taj-mahal.jpg";
        --hist;
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
    what ? (imgTajElement.src = "../images/taj-mahal.jpg") : (imgTajElement.src = "../images/taj-mahal-back-side.jpg");
}