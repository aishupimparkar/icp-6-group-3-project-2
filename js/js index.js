let sidemeu = document.getElementById("sideMenu");
function openMenu() {
    sidemeu.style.top = "0";
}
function closeMenu() {
    sidemeu.style.top = "-400px";
}

let next = 1;
function mapImg() {
    let imgElement = document.getElementById("india-map");
    if (next == 0) {
        imgElement.src = "../images/dal-lake-2.jpg";
        ++next;
    }
    else if (next == 1) {
      
 imgElement.src = "../images/dal-lake-1.jpg";
    }
}

function mapImgBef() {
    let imgElement = document.getElementById("india-map");
    if (next == 1) {
        imgElement.src = "";
        next = 1;
    }
    else if (next == 2) {
        imgElement.src = "../images/dal-lake-2.jpg";
        --next;
    }
}