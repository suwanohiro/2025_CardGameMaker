class _setting_title {
    static init() {
        const _title = document.querySelectorAll('.setting_value');
        _title.forEach(element => {
            const base = document.createElement('span');
            const settingTitle = element.dataset.name;
            base.classList.add("setting_title");
            base.innerHTML = settingTitle;

            if (this.__isInputType(element, "range")) {
                const elem = this.__addRangeValue(element, this.__createUnit(settingTitle));
                base.appendChild(elem);
            }

            element.parentNode.insertBefore(base, element.parentElement.firstElementChild);
        });
    }

    static __createUnit(title) {
        if (title.match(/.+座標$/)) return "%";

        return "";
    }

    static __getTagName(element) {
        return element.tagName.toLowerCase();
    }

    static __isInputType(element, type) {
        return element.tagName.toLowerCase() == "input" && element.type == type;
    }

    static __addRangeValue(element, unit) {
        if (!this.__isInputType(element, "range")) return;

        const value = document.createElement('span');
        value.classList.add("setting_value");
        value.innerHTML = ` ( ${element.value} ${unit} ) `;

        element.addEventListener("input", () => {
            value.innerHTML = ` ( ${element.value} ${unit} ) `;
        });

        return value;
    }
}