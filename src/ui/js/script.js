globalThis.onload = () => {
    color();
    name();
    image();
    range();
}

function color() {
    const color = document.getElementById("color");
    const card = document.getElementById("card");
    color.addEventListener("input", () => {
        card.style.backgroundColor = color.value;
    });
}

function name() {
    const name = document.getElementById("name");
    const card_name = document.getElementById("card_name");
    name.addEventListener("input", () => {
        card_name.innerHTML = name.value;
    });
}

function image() {
    const image = document.getElementById("image");
    const card_image = document.getElementById("card_image");
    image.addEventListener("input", () => {
        // 画像ファイルを読み込んでcard_imageの背景画像として設定する
        const file = image.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            card_image.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    });
}

function range() {
    const card_image = document.getElementById("card_image");
    const posX = document.getElementById("posX");
    const posY = document.getElementById("posY");

    const posX_value = document.getElementById("posX_value");
    const posY_value = document.getElementById("posY_value");
    posX.addEventListener("input", () => {
        posX_value.innerHTML = posX.value;
        card_image.style.backgroundPositionX = `${posX.value}%`;
    });

    posY.addEventListener("input", () => {
        posY_value.innerHTML = posY.value;
        card_image.style.backgroundPositionY = `${posY.value}%`;
    });
}