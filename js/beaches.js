let sidemeu = document.getElementById("sideMenu");
function openMenu() {
    sidemeu.style.top = "0";
}
function closeMenu() {
    sidemeu.style.top = "-400px";
}

const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
let count = 0;

likeButton.addEventListener('click', () => {
  count++;
  likeCount.innerText = count;
});
