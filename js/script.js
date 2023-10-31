const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video');

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('about__play--hidden');
})

var indexValue = 1;
showImg(indexValue);
function side_slide(e) {
    showImg(indexValue += e);
}
function showImg(e) {
    var i;
    const img = document.querySelectorAll(".services__image img");
    if(e > img.length) {
        indexValue = 1;
    }
    if(e < 1) {
        indexValue = img.length;
    }
    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}