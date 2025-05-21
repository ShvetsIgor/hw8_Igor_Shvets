const mainImg = document.querySelector(".main-img>img");

const mainTitle = document.querySelector(".info>h1");

const mainText = document.querySelector(".info>h2");

const timeInCity = document.querySelector("#time");

const prevImg = document.querySelectorAll(".gallery img");

function changeMainPictureAndTextByClick(src, text, weather, time) {
    mainImg.src = src;
    mainTitle.innerHTML = text;
    mainText.innerHTML = weather;
    timeInCity.innerHTML = time;
}

for (let i = 0; i < prevImg.length; i++) {
    prevImg[i].addEventListener("click", function () {
            changeMainPictureAndTextByClick(prevImg[i].src, prevImg[i].getAttribute("data-text"), prevImg[i].getAttribute("data-weather"), prevImg[i].getAttribute("data-time"));
        }
    )
}

