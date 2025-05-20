class CardColor {
    static red = "#6D0F0F";
    static blue = "#1A8CFF";
    static green = "#57B72B";
    static yellow = "#E6DB00";
    static white = "#DFDFDF";

    static length() { return Object.keys(this).length; }
}


globalThis.onload = () => {
    color();
    name();
    image();
    cost();
    save();
    range();
    _setting_title.init();
    richText(); // 追加
    console.log(CardColor.length());
}

function save() {
    const btn = document.getElementById('save');
    if (!btn) return;

    const card_name = document.getElementById("name");
    btn.addEventListener('click', function () {
        const card = document.getElementById('card');


        html2canvas(card, { backgroundColor: null }).then(canvas => {
            const link = document.createElement('a');
            link.download = (card_name.value == "") ? "card.png" : card_name.value + ".png";
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
}

function color() {
    const setting_color = document.getElementById("setting_color");
    const card = document.getElementById("card");

    for (let cnt = 0; cnt < CardColor.length(); cnt++) {
        const colorElem = document.createElement("span");
        colorElem.classList.add("select_color");
        colorElem.style.backgroundColor = CardColor[Object.keys(CardColor)[cnt]];
        colorElem.addEventListener("click", () => {
            card.style.backgroundColor = CardColor[Object.keys(CardColor)[cnt]];
        });
        setting_color.appendChild(colorElem);
    }
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
    const image_button = document.getElementById("image_button");
    const card_image = document.getElementById("card_image");

    // 画像の選択ボタンをクリックしたときにinput[type="file"]をクリックする
    image_button.addEventListener("click", () => { image.click(); });


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

function cost() {
    const cost = document.getElementById("cost");
    const card_cost = document.getElementById("card_cost");
    cost.addEventListener("input", () => {
        card_cost.innerHTML = cost.value;
    });
}

function range() {
    const card_image = document.getElementById("card_image");
    const posX = document.getElementById("posX");
    const posY = document.getElementById("posY");

    posX.addEventListener("input", () => {
        card_image.style.backgroundPositionX = `${posX.value}%`;
    });

    posY.addEventListener("input", () => {
        card_image.style.backgroundPositionY = `${posY.value}%`;
    });
}

function richText() {
    const richText = document.getElementById("rich_text");
    const cardText = document.getElementById("card_text");
    richText.addEventListener("input", () => {
        cardText.innerHTML = richText.innerHTML;
    });
}